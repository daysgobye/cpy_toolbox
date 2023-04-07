import React from "react"
import { PopOver } from "../../logic/popover"
import Ide from "../../logic/ide"
const ideManager = Ide.getInstance()
const popOver = PopOver.getInstance()
let newFileInput = ""
const ContextMenu = (selectedDir: any) => {
    // const [newFileInput, setNewFileInput] = React.useState("")
    return (
        <div className="flex flex-col ">
            <input type="text" onChange={(e) => {
                // setNewFileInput(e.target.value)
                newFileInput = e.target.value
            }} placeholder="file or dir name" />
            <button className="btn98"
                onClick={() => {
                    ideManager.makeNewDir(selectedDir, newFileInput)
                    popOver.hide()
                }
                }>New Folder Here</button>
            <button className="btn98"
                onClick={() => {
                    ideManager.makeNewFile(selectedDir, newFileInput)
                    popOver.hide()
                }
                }>New File Here</button>
            <button className="btn98" onClick={() => popOver.hide()}>Close</button>
        </div>
    )
}

export default ContextMenu