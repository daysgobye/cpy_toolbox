import React, { useEffect } from "react"
import CodeEditor from '@uiw/react-textarea-code-editor';
import Ide from "../../logic/ide";

const ideManager = Ide.getInstance()

type Props = {
    path: string

}
const Editor = (props: Props) => {
    const [code, setCode] = React.useState(
        ""
    ), [subId, setSubId] = React.useState("")

    const updateState = async () => {
        const newFile = await ideManager.getFile(props.path)
        setCode(newFile)
    }
    const updateFile = (newValue: string) => {
        ideManager.updateFile(props.path, newValue)
    }

    useEffect(() => {
        if (subId === "") {
            const tempId = ideManager.Subscribe(updateState)
            setSubId(tempId)
        }
        updateState()
    })
    const getFileType = () => {
        // const fileType = props.path.split(".")
        return "py"
    }

    return (
        <div className="h80 overflow-y-scroll	   ">
            <CodeEditor
                data-gramm="false"
                data-gramm_editor="false"
                data-enable-grammarly="false"
                value={code}
                language={getFileType()}
                placeholder="Make something awesome!"
                onChange={(evn: any) => updateFile(evn.target.value)}
                padding={15}
                style={{
                    fontSize: 12,
                    // backgroundColor: "#f5f5f5",
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
            />
        </div>
    )
}

export default Editor