//@ts-ignore
import mxSwitch from "../../images/mx_switch.svg";
//@ts-ignore
import lily58 from "../../images/lily58_outline.svg";
const images = { mxSwitch, lily58 }
//@ts-ignore
export const getImage = (image: string) => images[image] ? images[image] : "";
