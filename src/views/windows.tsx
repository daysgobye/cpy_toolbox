import * as React from "react"
import Window from "floating-window-ui";
import TerminalView from "./terminal";
import IdeView from "./ide";
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
                icon: "𑪡",
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
                icon: "𑪡",
                title: "IDE",
                buttons: { minimize: true, maximize: true, close: () => props.close(props.index) },
            }}
        >
            <IdeView />
        </Window>
    )
}