import * as React from "react"
import { Serial } from "../logic/serial"
import Terminal from "../components/terminal"
import { useEffect } from "react"
import Editor from "../components/editor"
import FileTree from "../components/fileTree"
import Ide from "../logic/ide"
const connection = Serial.getInstance()
const ideManager = Ide.getInstance()
export default function IdeView() {
    const
        [tree, setTree] = React.useState(ideManager.fileSystem),
        [subId, setSubId] = React.useState(""),
        [openedFiles, setOpenedFiles] = React.useState<Set<string>>(new Set()),
        [selectedFile, setSelectedFile] = React.useState("")


    const ctrlc = () => {
        connection.write("\x03")
    }
    const ctrld = () => {
        connection.write("\x04")
    }
    const saveCurrentFile = () => {
        ideManager.saveFile(selectedFile)
    }
    const open = () => {
        if (ideManager.connected) {
            ideManager.getFileSystem()
        }
        else {
            ideManager.open()
        }
    }

    const selectFile = async (selected: any, info: any) => {
        console.log(selected, info, info.selectedNodes.hasOwnProperty("children"))
        if (!info.selectedNodes.hasOwnProperty("children")) {
            ideManager.getFile(selected[0])
            const tempOpenFiles = [selected[0], ...openedFiles]
            setOpenedFiles(new Set(tempOpenFiles))
            setSelectedFile(selected[0])

        }
    }

    const updateState = () => {
        setTree(ideManager.fileSystem)
    }

    useEffect(() => {
        if (subId === "") {
            const tempId = ideManager.Subscribe(updateState)
            setSubId(tempId)

        }
        // return () => {
        //     console.log("subbing", subId, ideManager)

        //     ideManager.Unsubscribe(subId)
        // }
    })



    return (<div className="h100">


        <div className="flex flex-row">
            <button className="btn98" onClick={open}>open</button>
            <button className="btn98 ml-2	" onClick={() => connection.close()}>close</button>
            <button className="btn98 ml-2	" onClick={ctrlc}>
                ctrl+c
            </button>
            <button className="btn98 ml-2	" onClick={ctrld}>
                ctrl+d
            </button>
            <button className="btn98 ml-2	" onClick={saveCurrentFile}>
                save {selectedFile}
            </button>
        </div>

        <div className="flex h90">
            <div className="w20">
                <FileTree tree={[tree]}
                    selectFile={selectFile} />
            </div>
            <div className="w80 h100">
                <div className="tabs">
                    {[...openedFiles].map((path, i) => (
                        <a key={path + i} onClick={() => setSelectedFile(path)}
                            className={`tab tab-lifted ${selectedFile === path ? "tab-active" : ""}`}
                        >{path}</a>
                    ))}
                </div>
                {selectedFile !== "" ? <Editor path={selectedFile} /> : ""}
                <div className="h20">
                    <Terminal />

                </div>
            </div>

        </div>
    </div>

    )
}

