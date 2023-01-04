import React from "react"
// import "antd/dist/antd.css";
import { Tree } from "antd";

type Props = {
    tree: any
    selectFile: (selectedKey: any, info: any) => void
}
const FileTree = (props: Props) => {
    return (
        <div>
            <Tree treeData={props.tree} onSelect={props.selectFile} />
        </div>
    )
}

export default FileTree