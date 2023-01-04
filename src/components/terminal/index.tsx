import React, { useEffect, useRef } from "react"
import { Serial } from "../../logic/serial"
const connection = Serial.getInstance()

type Props = {
    className?: string
}
const Terminal = (props: Props) => {
    const terRef = useRef(null),
        [data, setData] = React.useState<string[]>([])
    const scrollToBottom = () => {
        if (terRef.current) {
            //@ts-ignore
            terRef.current.scrollTop = terRef.current.scrollHeight
        }
    }
    const renderData = (newData: string) => {
        const tmpData = [...data, newData]
        setData(tmpData)
    }
    connection.renderData = renderData

    useEffect(() => {
        scrollToBottom()
    })
    const returnTextColorName = (line: string) => {
        if (line.startsWith("ToolBox Info:")) {
            return "text-[#3252a8]"
        } else if (line.startsWith("ToolBox ERROR:")) {
            return "text-[#ffb00]"
        } else {
            return "text-[#33ff00]"

        }

    }

    return (
        <div className="terminal ">

            <div className={`terminal_code terminal-bg w-[100%]
         overflow-y-scroll overflow-x-auto ${props.className ? props.className : ""}`} ref={terRef}>
                {data.map((line, index) => (
                    <p key={index} className={`${returnTextColorName(line)}  break-all`}><code>{line}</code></p>
                ))}
            </div>
        </div>
    )
}

export default Terminal