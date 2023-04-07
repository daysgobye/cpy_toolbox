import * as React from "react"
import Window from "floating-window-ui";
import TerminalView from "./terminal";
import IdeView from "./ide";
import SettingsView from "./settings";
//@ts-ignore
import console_prompt from "../images/console_prompt-1.png"
//@ts-ignore
import program_manager from "../images/program_manager-0.png"
//@ts-ignore
import settings_gear from "../images/settings_gear-1.png"
import IeBrowserView from "./ieBrowser";
export type WindowProps = {
    close: (index: number) => void
    index: number
}
export const TerminalViewWindow = (props: WindowProps) => {
    return (
        <Window
            id="terminal-window"
            height={600}
            width={600}
            resizable={true}
            titleBar={{
                //@ts-ignore
                icon: (<img src={console_prompt} alt="terminal icon" />),
                title: "Terminal REPL",
                buttons: { minimize: true, maximize: true, close: () => props.close(props.index) },
            }}
        >
            <TerminalView />
        </Window>
    )
}
export const IdeViewWindow = (props: WindowProps) => {
    return (
        <Window
            id="ide-window"
            height={700}
            width={700}
            resizable={true}
            titleBar={{
                //@ts-ignore
                icon: (<img src={program_manager} alt="ide icon" className="h-4" />),
                title: "IDE",
                buttons: { minimize: true, maximize: true, close: () => props.close(props.index) },
            }}
        >
            <IdeView />
        </Window>
    )
}

export const SettingsViewWindow = (props: WindowProps) => {
    return (
        <Window
            id="settings-window"
            height={400}
            width={400}
            resizable={true}
            titleBar={{
                //@ts-ignore
                icon: (<img src={settings_gear} alt="gear icon" />),
                title: "Settings",
                buttons: { minimize: true, maximize: true, close: () => props.close(props.index) },
            }}
        >
            <SettingsView />
        </Window>
    )
}

export const IeBrowserViewWindow = (props: WindowProps) => {
    return (
        <Window
            id="IE-window"
            height={600}
            width={700}
            resizable={true}
            titleBar={{
                //@ts-ignore
                icon: (<img src={settings_gear} alt="gear icon" />),
                title: "IE",
                buttons: { minimize: true, maximize: true, close: () => props.close(props.index) },
            }}
        >
            <IeBrowserView />
        </Window>
    )
}