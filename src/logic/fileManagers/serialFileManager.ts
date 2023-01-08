import { comparStrings, delay, escapeCharacters } from "../helper";
import { Serial } from "../serial";
import { FileTreeData } from "../types";
import IFileManager from "./ifileManager";

export default class SerialFileManager implements IFileManager {
    connection: any;
    connected: boolean = false
    haveFileSystem: boolean = false
    inUse: boolean = false

    constructor() {
        this.connection = Serial.getInstance()
        this.connected = this.connection.connected
    }
    waitUntilCanUse = async () => {
        while (this.inUse) {
            await delay(100)
        }
        return true
    }
    setUsing = (newValue: boolean) => {
        this.inUse = newValue
    }

    open = () => {
        this.connection.open()
        this.connected = true
    }
    close = () => {
        this.connection.close()
        this.connected = false
    }

    getFileSystem = async () => {
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
        await this.connection.getReplConnection()
        this.connection.toggleLock(true)
        this.connection.writeStringToByte("import os")
        const files = await getFiles("/")
        const data = await possessFiles(files, "/")
        this.setUsing(false)
        this.connection.toggleLock(false)
        this.haveFileSystem = true
        return data
    }
    readFile = async (path: string) => {
        const getLine = async (lineNumber: number) => {
            console.log("getting line", lineNumber)
            this.connection.writeStringToByte(`print(l[${lineNumber}])`)
            await delay()
        }
        await this.waitUntilCanUse()
        this.setUsing(true)
        await this.connection.getReplConnection()

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
    writeFile = async (path: string, newFile: string) => {
        const checkSum = true
        await this.waitUntilCanUse()
        this.setUsing(true)
        await this.connection.getReplConnection()
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
            const savedFile = await this.readFile(path)
            if (comparStrings(savedFile, newFile)) {
                this.connection.communicate(`ToolBox Info: File Saved! ${path} was saved successfully.`)
            } else {
                this.connection.communicate(`ToolBox ERROR: File Saved... ${path} was saved but something is wrong.`)
            }
        }
    }

}