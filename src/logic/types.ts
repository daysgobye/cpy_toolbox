export enum ConnectionType {
    Serial = "serial",
    FileApi = "file"
}
export type File = {
    name: string
    size: number
    text: () => Promise<string>
}
export type Handle = {
    name: string
    kind: string
    getFile: () => Promise<File>
    createWritable: () => Promise<any>
}
export type FileTreeData = {
    title: string
    key: string,
    children?: FileTreeData[]
    handle?: Handle
}

export type BootOptions = {
    serialEditing?: boolean
    hiddenDrive?: boolean
}
