
import React, { useEffect, useState } from "react"
import { PopOver } from "../../logic/popover"
const popOver = PopOver.getInstance()
type Props = {

}


const PopOverRender = (props: Props) => {
    const [View, setView] = useState(popOver.toRender),
        [open, setOpen] = useState(popOver.open),
        [xy, setXy] = useState(popOver.xy)
    useEffect(() => {
        popOver.Subscribe(() => {
            setOpen(popOver.open)
            setView(popOver.toRender)
            setXy(popOver.xy)
        })
    })
    const returnStyles = () => {
        return {
            left: `${xy[0]}px`,
            top: ` ${xy[1]}px`
        }


    }
    if (open && View) {
        return (
            <div className="ToolTipDisplay relative">
                <div className="absolute top" style={returnStyles()}>

                    {popOver.toRender}
                </div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}

export default PopOverRender

