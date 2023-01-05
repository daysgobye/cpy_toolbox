import * as React from "react"
import { Serial } from "../logic/serial"

const connection = Serial.getInstance()
export default function FunctionsView() {

    const serialFileEditing = () => { }
    const hideDrive = () => { }
    const showDrive = () => { }
    const wipeDrive = () => { }



    return (
        <div className="h-full w-[100%] flex flex-col">
            <table>
                <tr>
                    <td><button className="btn98" onClick={() => connection.open()}>Open</button></td>
                    <td><button className="btn98" onClick={() => connection.close()}>Close</button></td>
                    <td><button className="btn98" onClick={() => connection.ctrlc()}>Stop Program</button></td>
                    <td><button className="btn98" onClick={() => connection.ctrld()}>Restart Device</button></td>
                </tr>
                <tr>
                    <td><button className="btn98" onClick={serialFileEditing}>Setup for serial file Editing</button></td>
                    <td><button className="btn98" onClick={hideDrive}>Hide cpy Drive</button></td>
                    <td><button className="btn98" onClick={showDrive}>Show cpy Drive</button></td>
                    <td><button className="btn98" onClick={wipeDrive}>Wipe Drive</button></td>
                </tr>
            </table>

        </div>

    )
}


