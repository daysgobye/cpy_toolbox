import { Subscribable } from "./subscribable";

export class PopOver extends Subscribable {
    private static instance: PopOver;
    open: boolean = false
    // toRender: ((props: any) => JSX.Element) | (undefined) = undefined
    toRender: any

    xy: number[] = [0, 0]
    state: any
    private constructor() {
        super();
    }
    public static getInstance(): PopOver {
        if (!PopOver.instance) {
            PopOver.instance = new PopOver();
        }
        return PopOver.instance;
    }

    show = (view: (props: any) => JSX.Element, state: any, xy: number[]) => {
        this.state = state
        this.toRender = view(state)
        this.xy = xy
        this.open = true
        this.updateSubScribers()
    }
    hide = () => {
        this.open = false
        this.updateSubScribers()
    }
}