import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import "../styles/98.css"
import { useEffect } from "react"
import TerminalView from "../views/terminal";
import { IdeViewWindow, IeBrowserViewWindow, SettingsViewWindow, TerminalViewWindow, WindowProps } from "../views/windows";
import { AppManager } from "../logic/appManager"
import PopOverRender from "../components/popover"
//@ts-ignore
import windowsIcon from "../images/windows-0.png"
//@ts-ignore
import console_prompt from "../images/console_prompt-0.png"
//@ts-ignore
import program_manager from "../images/program_manager-0.png"
//@ts-ignore
import settings_gear from "../images/settings_gear-0.png"
//@ts-ignore
import card_reader from "../images/card_reader-2.png"
//@ts-ignore
import card_reader_not from "../images/card_reader_not-0.png"

const appManager = AppManager.getInstance()

type Window = {
  Component: (props: WindowProps) => JSX.Element
  onClose: (index: number) => void
}

export default function IndexPage() {
  const ref = React.useRef(),
    [windows, setWindows] = React.useState<Window[]>([]),
    [startOpen, setStartOpen] = React.useState(false)

  const onClose = (index: number) => {
    let tempWindows = [...windows]
    tempWindows.splice(index, 1);
    setWindows(tempWindows)
  }
  const handleKeyEvent = (e: KeyboardEvent | React.KeyboardEvent) => {
    // console.log("e:", e)
    if (e.ctrlKey) {
      switch (e.key) {
        case "c":
          break;
        case "d":
          break;
        default:
          break;
      }
    }
  }
  const launchApp = (app: (props: WindowProps) => JSX.Element) => {
    setWindows([...windows, { Component: app, onClose: onClose }])
    setStartOpen(false)

  }
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      //@ts-ignore
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handleKeyEvent(e);
    }
    appManager.report()
    document.addEventListener("keyup", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keyup", handleKeyDown);
    };
  }, []);
  return (
    /* @ts-ignore */
    <div ref={ref} className="cpywindow oldschool h-[100vh] w-[100vw] bg-amber-400 overflow-hidden	">
      {windows.map(({ Component, onClose }, index) => (
        <Component close={onClose} index={index} />
      ))}
      {
        startOpen && (
          <div className="start-menu bg fixed bottom-8 flex w-[200px] h-[300px] top">
            <div className="h-full w-[15%] bg-stone-400 content-center relative ">
              <h5 className=" absolute start-title rotate-[270deg] whitespace-nowrap ">
                <span>Bs-Python ToolBox</span>  98
              </h5>
            </div>
            <div className="flex flex-col justify-end h-full w-[85%]">
              <button className="flex p-2 items-end" onClick={() => launchApp(TerminalViewWindow)}>
                <img src={console_prompt} alt="window icon" className="h-7 mr-4" />
                Terminal</button>
              <button className="flex p-2 items-end" onClick={() => launchApp(IdeViewWindow)}>
                <img src={program_manager} alt="window icon" className="h-7 mr-4" />

                IDE</button>
              <button className="flex p-2 items-end" onClick={() => launchApp(SettingsViewWindow)}>
                <img src={settings_gear} alt="window icon" className="h-7 mr-4" />

                Settings</button>
              <button className="flex p-2 items-end" onClick={() => launchApp(IeBrowserViewWindow)}>
                <img src={settings_gear} alt="window icon" className="h-7 mr-4" />

                IE</button>
              <hr className="h-px bg-stone-400 border-0 " />
              <hr className="h-px bg-stone-100 border-0 " />
              <button className="flex p-2 items-end" onClick={() => { appManager.connection.open() }}>
                <img src={card_reader} alt="window icon" className="h-7 mr-4" />

                Open Serial</button>
              <button className="flex p-2 items-end" onClick={() => { appManager.connection.close() }}>
                <img src={card_reader_not} alt="window icon" className="h-7 mr-4" />

                Close Serial</button>
            </div>

          </div>
        )
      }

      <div className="start-bar w-[100vw] h-[30px] bg fixed bottom-0">
        <button onClick={() => setStartOpen(!startOpen)} className="btn98 flex">
          <img src={windowsIcon} alt="window icon" />
          <h5>start</h5>
        </button>
      </div>
      <PopOverRender />
    </div>
  )
}


export const Head: HeadFC = () => <title>cpy toolbox</title>
