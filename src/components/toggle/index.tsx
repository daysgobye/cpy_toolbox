
import React from "react"
// import "antd/dist/antd.css";
import { Tree } from "antd";

type Props = {
    value: boolean
    onChange: (newValue: boolean) => void
    label: string

}
const Toggle = (props: Props) => {
    return (
        <div>
            <input type="checkbox" id={props.label.replaceAll(" ", "-")}
                checked={props.value}
                onChange={(e) => props.onChange(e.target.checked)} />
            <label htmlFor={props.label.replaceAll(" ", "-")}>{props.label}</label>
        </div>
    )
}

export default Toggle

