import { useEffect, useRef, useState } from "react";

export const useFocus = () => {
    const htmlElRef = useRef(null)
    //@ts-ignore
    const setFocus = () => { htmlElRef.current && htmlElRef.current.focus() }

    return [htmlElRef, setFocus]
}