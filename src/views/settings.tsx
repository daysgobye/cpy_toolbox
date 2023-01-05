import * as React from "react"
import { ProgramSettings } from "../logic/programSettings";
import Toggle from "../components/toggle";

const settings = ProgramSettings.getInstance()

export default function SettingsView() {
    const
        [debug, setDebug] = React.useState(settings.debug),
        [autoConnect, setAutoConnect] = React.useState(settings.autoConnect),
        [autoFileTree, setAutoFileTree] = React.useState(settings.autoFileTree),
        [connectionType, setConnectionType] = React.useState(settings.connectionType)


    const updateState = () => {
        setDebug(settings.debug)
        setAutoConnect(settings.autoConnect)
        setConnectionType(settings.connectionType)
        setAutoFileTree(settings.autoFileTree)
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
            <Toggle value={autoFileTree} onChange={function (newValue: boolean): void {
                settings.autoFileTree = newValue
            }} label={"auto get File Tree"} />

            <fieldset onChange={(e) => {
                //@ts-ignore
                const value: ConnectionType = e.target.value
                settings.connectionType = value
            }}>
                <legend>IDE Connection Type</legend>
                <div className="field-row">
                    <input id="radio13" type="radio" checked={connectionType == 1} value={1} name="connectionType" />
                    <label htmlFor="radio13">File API</label>
                </div>
                <div className="field-row">
                    <input id="radio14" type="radio" checked={connectionType == 0} value={0} name="connectionType" />
                    <label htmlFor="radio14">Serial API</label>
                </div>

            </fieldset>
        </div>

    )
}


