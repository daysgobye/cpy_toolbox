import { ProgramSettings } from "./programSettings";

const settings = ProgramSettings.getInstance()
export const delay = (time: number = 600) => {
    return new Promise(resolve => setTimeout(resolve, time));
}
export const cleanString = (str: string) => {
    return `${str}`.replaceAll("\n", "").replaceAll("\r", "")
}
export const comparStrings = (str1: string, str2: string) => {
    return cleanString(str1) === cleanString(str2)
}
export const escapeCharacters = (str: string) => {
    return `${str}`.replaceAll("\n", "\\n").replaceAll("\r", "\\r").replaceAll("\t", "\\t")
}

export const log = function () {
    if (settings.debug) {
        //@ts-ignore
        console.log.apply(console, arguments);
    }
}