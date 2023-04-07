import { Subscribable } from "./subscribable";

class WebBrowser extends Subscribable {
    private static instance: WebBrowser;
    iframe: HTMLIFrameElement
    windowProxy: WindowProxy | null = null
    contentDocument: Document | null = null
    history: string[] = []
    historyInterval: any
    private constructor(iframe: HTMLIFrameElement) {
        super()
        this.iframe = iframe
        this.getWindow()
        this.getContentDocument()
        // this.buildHistory()
    }
    public static getInstance(iframe: HTMLIFrameElement): WebBrowser {
        if (!WebBrowser.instance) {
            WebBrowser.instance = new WebBrowser(iframe);
        }
        return WebBrowser.instance;
    }


    getWindow = () => {
        this.windowProxy = this.iframe.contentWindow
    }
    getContentDocument = () => {
        if (!this.contentDocument)
            this.contentDocument = this.iframe.contentDocument
        console.log(this.contentDocument)
    }

    getCurrentPage = () => {
        // // this.getWindow()
        // this.getContentDocument()
        // if (this.contentDocument) {

        //     return this.contentDocument.referrer
        // }
        // // if (this.windowProxy) {
        // //     return this.windowProxy.location
        // // }

    }
    // buildHistory = () => {
    //     this.historyInterval = setInterval(() => {
    //         const currentPage = this.getCurrentPage()
    //         console.log(this.iframe.contentDocument?.referrer)
    //     }, 1000)
    // }

    navigate = (url: string) => {
        this.iframe.src = url
    }
    back = () => {
        this.getWindow()
        if (this.windowProxy) {
            console.log(this.windowProxy)
            this.windowProxy.history.back()
        }
    }
}
export default WebBrowser