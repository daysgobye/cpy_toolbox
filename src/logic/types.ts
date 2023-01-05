export enum ConnectionType {
    Serial,
    FileApi
}
export type FileTreeData = {
    title: string
    key: string,
    children?: FileTreeData[]
}
