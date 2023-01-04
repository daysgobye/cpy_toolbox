import { comparStrings, delay, escapeCharacters } from "./helper";
import { Serial } from "./serial";
import { Subscribable } from "./subscribable";

export enum ConnectionType {
    Serial,
    FileApi
}
export type FileTreeData = {
    title: string
    key: string,
    children?: FileTreeData[]
}

class Ide extends Subscribable {
    private static instance: Ide;
    files = new Map<string, string>
    connection: Serial;
    fileSystem: FileTreeData = {
        title: "unset",
        key: "unset",
        children: []
    }
    connectionType: ConnectionType
    gotRepl: boolean = false
    inUse: boolean = false
    changesMade: boolean = false
    constructor(connectionType: ConnectionType) {
        super()
        this.connectionType = connectionType
        this.connection = Serial.getInstance()
        if (connectionType === ConnectionType.Serial) {
            // if (connection.connected) {
            //     this.getReplConnection()
            // } else {
            //     connection.open(() => this.getReplConnection())
            // }
        }
    }
    public static getInstance(connectionType: ConnectionType): Ide {
        if (!Ide.instance) {
            Ide.instance = new Ide(connectionType);
        }
        return Ide.instance;
    }

    getReplConnection = async () => {
        if (this.gotRepl) {
            return await delay()
        } else {
            this.connection.toggleLock(true)
            this.connection.ctrld()
            await delay()
            this.connection.ctrlc()
            await delay()
            this.connection.ctrlc()
            await delay()
            this.connection.write("\r\n")
            this.connection.toggleLock(false)
            this.gotRepl = true
            return await delay()
        }

    }
    waitUntilCanUse = async () => {
        while (this.inUse) {
            await delay()
        }
        return true
    }
    setUsing = (newValue: boolean) => {
        this.inUse = newValue
    }
    private getFileApiFileSystem = async () => {

    }
    private getSerialFileSystem = async () => {
        const getFiles = async (path: string) => {
            await delay()
            let files: string = await this.connection.sendAndStealResponse(`print(os.listdir("${path}"))`)
            return files
        }
        const possessFiles = async (tmpfiles: string, parent: string) => {
            const jsonFiles = JSON.parse(tmpfiles.replaceAll(`'`, `"`))
            // console.log(jsonFiles)
            let tempTree: FileTreeData = {
                title: parent,
                key: parent,
                children: []
            }
            for (const file of jsonFiles) {
                if (file !== "System Volume Information") {

                    if (file.includes(".")) {
                        const newPath = parent + "/" + file
                        tempTree.children?.push({
                            title: file,
                            key: newPath.replaceAll("//", "/")
                        })
                    } else {
                        const newPath = parent + "/" + file
                        const newFiles = await getFiles(newPath)
                        const tempFiles = await possessFiles(newFiles, newPath)
                        const children = Array.isArray(tempFiles.children) && tempFiles.children.length > 0 ? [...tempFiles.children] : []
                        tempTree.children?.push({
                            title: file,
                            key: newPath.replaceAll("//", "/"),
                            children
                        })
                    }
                }
            };
            return tempTree
        }
        await this.waitUntilCanUse()
        this.setUsing(true)
        await this.getReplConnection()
        this.connection.toggleLock(true)
        this.connection.writeStringToByte("import os")
        const files = await getFiles("/")
        const data = await possessFiles(files, "/")
        this.setUsing(false)
        this.connection.toggleLock(false)
        this.fileSystem = data
        this.updateSubScribers()
    }
    getFileSystem = () => {
        if (this.connectionType === ConnectionType.Serial) {
            this.getSerialFileSystem()
        }
        if (this.connectionType === ConnectionType.FileApi) {
            this.getFileApiFileSystem()
        }
    }
    private getSerialFile = async (path: any) => {

        const getLine = async (lineNumber: number) => {
            console.log("getting line", lineNumber)
            this.connection.writeStringToByte(`print(l[${lineNumber}])`)
            await delay()
        }
        await this.waitUntilCanUse()
        this.setUsing(true)
        await this.getReplConnection()

        this.connection.toggleLock(true)
        this.connection.writeStringToByte("import os")
        await delay()
        this.connection.writeStringToByte(`f=open("${path}","r")`)
        await delay()
        this.connection.writeStringToByte(`l=f.readlines()`)
        await delay()
        let numOfLines = await this.connection.sendAndStealResponse(`print(len(l))`)
        await delay()
        // console.log("going to get lines", numOfLines)
        const responsesPreFile = this.connection.responses.length
        for (let i = 0; i < Number(numOfLines); i++) {
            await getLine(i)
        }
        this.connection.writeStringToByte("f.close()")
        this.setUsing(false)
        this.connection.toggleLock(false)
        const fileResponses = [...this.connection.responses].splice(responsesPreFile, this.connection.responses.length - 1)
        const filtered: string[] = fileResponses.filter(res => !res.startsWith(">>> "))
        // console.log(responsesPreFile, this.connection.responses.length, fileResponses)
        const file = filtered.join("")
        return file
    }

    private getFileApiFile = async (path: any) => {
        return ""
    }

    getFile = async (path: any): Promise<string> => {
        if (!this.files.has(path)) {
            if (this.connectionType === ConnectionType.Serial) {
                const file = await this.getSerialFile(path)
                this.files.set(path, file)
                return file
            }
            if (this.connectionType === ConnectionType.FileApi) {
                const file = await this.getFileApiFile(path)
                this.files.set(path, file)
                return file

            } else {
                return ""
            }
        } else {
            const file = `${this.files.get(path)}`
            return file
        }

    }

    private saveSerialFile = async (path: string, newFile: string) => {
        const checkSum = true
        await this.waitUntilCanUse()
        this.setUsing(true)
        await this.getReplConnection()
        this.connection.toggleLock(true)
        this.connection.writeStringToByte("import os")
        await delay()
        this.connection.writeStringToByte(`f=open("${path}","w")`)
        await delay()
        this.connection.writeStringToByte(`nf='''${escapeCharacters(newFile)}'''`)
        await delay()
        this.connection.writeStringToByte("f.write(nf)")
        await delay()
        this.connection.writeStringToByte("f.close()")
        await delay()
        this.connection.writeStringToByte("os.sync()")
        this.setUsing(false)
        this.connection.toggleLock(false)
        if (checkSum) {
            const savedFile = await this.getSerialFile(path)
            if (comparStrings(savedFile, newFile)) {
                this.connection.communicate(`ToolBox Info: File Saved! ${path} was saved successfully.`)
            } else {
                this.connection.communicate(`ToolBox ERROR: File Saved... ${path} was saved but something is wrong.`)
            }
        }
    }

    private saveFileApiFile = async (path: string, newFile: string) => {
        return ""
    }

    saveFile = async (path: string) => {
        const fileToBeSaved = await this.getFile(path)
        if (this.connectionType === ConnectionType.Serial) {
            console.log({ path, fileToBeSaved })
            const file = await this.saveSerialFile(path, fileToBeSaved)

        }
        if (this.connectionType === ConnectionType.FileApi) {
            const file = await this.saveFileApiFile(path, fileToBeSaved)


        }

    }

    makeNewFile = (path: string, name: string) => {

    }

    updateFile = (path: string, newFile: string) => {
        this.files.set(path, newFile)
        this.changesMade = true
        this.updateSubScribers()

    }
}

export default Ide