
import React from "react"

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

