import * as React from "react"
import { ControlCodes, Serial } from "../logic/serial"
import Terminal from "../components/terminal"
import { useEffect } from "react"
const connection = Serial.getInstance()

export default function TerminalView() {
    const
        [input, setInput] = React.useState(""),
        [upPress, setUpPress] = React.useState(0),
        [lastInput, setLastInput] = React.useState<string[]>([]),
        ref = React.useRef();


    const ctrlc = () => {
        connection.ctrlc()
    }
    const ctrld = () => {
        connection.ctrld()
    }
    const anykey = () => {
        connection.anykey()
    }
    const enter = () => {
        connection.writeStringToByte(input)
        setLastInput([input, ...lastInput])
        setInput("")
        setUpPress(0)
    }
    const read = async () => {


        connection.readPort()
    }
    const handleKeyEvent = (e: KeyboardEvent | React.KeyboardEvent) => {
        // console.log("e:", e)
        if (e.ctrlKey) {
            switch (e.key) {
                case "c":
                    ctrlc()
                    break;
                case "d":
                    ctrld()
                    break;
                default:
                    break;
            }
        } else if (e.key === "Enter") {
            enter()
        } else if (e.key === "ArrowUp") {
            setInput(lastInput[upPress])
            setUpPress(upPress + 1)

        } else if (e.key === "ArrowDown") {
            // setUpPress(upPress - 1)
            // setInput(lastInput[upPress])
            console.warn(" ArrowDown is not supported yet")
        }

    }
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            //@ts-ignore
            if (!ref.current || ref.current.contains(e.target)) {
                return;
            }
            handleKeyEvent(e);
        }
        document.addEventListener("keyup", handleKeyDown);

        return function cleanup() {
            document.removeEventListener("keyup", handleKeyDown);
        };
    }, []);
    return (
        // @ts-ignore
        <div ref={ref} className="h-full w-[100%] flex flex-col bg-red-300">
            <div className="flex justify-between w-[100%] bg-red-400">


                <button className="ml-2	btn98" onClick={() => connection.open()}>open</button>
                <button className="btn98" onClick={() => connection.close()}>close</button>


                <button className="ml-2	btn98" onClick={ctrlc}>
                    ctrl
                    +
                    c
                </button>
                <button className="ml-2	btn98" onClick={ctrld}>
                    ctrl
                    +
                    d
                </button>
                {/* <button className="btn98" onClick={anykey}>
                    any key
                </button>

                <button className="btn98" onClick={read}>
                    fuck on
                </button> */}
            </div>
            <div className="flex flex-col h80 terminal_window">
                <Terminal />
                <div className="flex w-[100%]">


                    <input type="text" className="terminal-bg terminal-input text-[#33ff00]" onKeyDown={handleKeyEvent} value={input} onChange={(e) => {
                        //@ts-ignore
                        setInput(e.target.value)
                    }} />
                    <button className="btn terminal-bg terminal-btn text-[#33ff00]" onClick={enter}> ⏎</button>
                </div>
            </div>

        </div>

    )
}


