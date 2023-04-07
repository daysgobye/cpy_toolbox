import * as React from "react"
import WebBrowser from "../logic/webBrowser";
let browser: WebBrowser | undefined
export default function IeBrowserView() {
    const ref = React.useRef(),
        [url, setUrl] = React.useState("https://web.archive.org/web/19961017235908/http://www2.yahoo.com/")

    React.useEffect(() => {
        if (ref.current && browser === undefined) {
            browser = WebBrowser.getInstance(ref.current)
        }
    })
    const navigate = () => {
        if (browser) {
            browser.navigate(url)
        }
    }
    const forwardOrBack = (forward: boolean) => {
        if (browser) {
            if (forward) {

            } else {
                browser.back()
            }
        }
    }
    return (<div className="h100">
        <div className="flex">
            <button onClick={() => forwardOrBack(false)} className="btn98">
                {"<-"}
            </button>
            <button onClick={() => forwardOrBack(true)} className="btn98">
                {"->"}
            </button>

            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button onClick={navigate} className="btn98">
                go
            </button>
        </div>

        {/* @ts-ignore */}
        <iframe ref={ref} src="https://web.archive.org/web/19991103154041/http://www.napster.com/" frameBorder="0" height="600px" width="700px"></iframe>
    </div>

    )
}


