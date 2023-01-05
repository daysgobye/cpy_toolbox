import { Serial } from "../serial"
import { FileTreeData } from "../types"

export default interface IFileManager {
    open: () => void
    close: () => void
    getFileSystem: () => Promise<FileTreeData>
    readFile: (path: string) => Promise<string>
    writeFile: (path: string, newFile: string) => void
    connection: Serial | any;
    connected: boolean
    haveFileSystem: boolean
}

