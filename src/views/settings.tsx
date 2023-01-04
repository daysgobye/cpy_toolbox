import * as React from "react"
import { ProgramSettings } from "../logic/programSettings";
import Toggle from "../components/toggle";

const settings = ProgramSettings.getInstance()

export default function TerminalView() {
    const
        [debug, setDebug] = React.useState(settings.debug),
        [autoConnect, setAutoConnect] = React.useState(settings.autoConnect),
        [connectionType, setConnectionType] = React.useState(settings.connectionType),


    const updateState = () => {
        setDebug(settings.debug)
        setAutoConnect(settings.autoConnect)
        setConnectionType(settings.connectionType)
    }
    React.useEffect(() => {
        settings.Subscribe(updateState)
    })

    return (
        <div className="h-full w-[100%] flex flex-col bg-red-300">
            <Toggle value={debug} onChange={function (newValue: boolean): void {
                settings.debug = newValue
            }} label={"Debug"} />
            <Toggle value={autoConnect} onChange={function (newValue: boolean): void {
                settings.autoConnect = newValue
            }} label={"auto connect"} />

            <fieldset onChange={(e) => {
                console.log(e)
            }}>
                <legend>IDE Connection Type</legend>
                <div className="field-row">
                    <input id="radio13" type="radio" name="File" />
                    <label htmlFor="radio13">File API</label>
                </div>
                <div className="field-row">
                    <input id="radio14" type="radio" name="Serial" />
                    <label htmlFor="radio14">Serial API</label>
                </div>

            </fieldset>
        </div>

    )
}


