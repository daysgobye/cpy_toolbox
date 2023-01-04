import { ConnectionType } from "./ide";
import { Subscribable } from "./subscribable";

export class ProgramSettings extends Subscribable {
    private static instance: ProgramSettings;
    private _autoConnect: boolean = true
    private _connectionType: ConnectionType = ConnectionType.Serial;
    private _debug: boolean = false;
    private _dev: boolean = false;
    private _apiUrl: string = "https://getpeg.xyz/api/"
    private _PPP: boolean = false
    PppBuyLink: string = "https://boardsource.xyz/store/5f2efc462902de7151495057"

    public version: string = "v0.1";
    private constructor() {
        super();
    }
    public get connectionType() {
        return this._connectionType;
    }
    public set connectionType(newValue: ConnectionType) {
        this._connectionType = newValue
        this.updateSubScribers()
    }
    public get autoConnect() {
        return this._autoConnect;
    }
    public set autoConnect(newValue: boolean) {
        this._autoConnect = newValue
        this.updateSubScribers()
    }
    public get debug() {
        return this._debug;
    }
    public set debug(newValue: boolean) {
        this._debug = newValue
        this.updateSubScribers()
    }

    public get dev() {
        return this._dev;
    }
    public set dev(newValue: boolean) {
        this._dev = newValue
        this.updateSubScribers()
    }

    public get apiUrl() {
        return this._apiUrl;
    }
    public set PPP(newValue: boolean) {
        if (this._PPP !== newValue) {
            this._PPP = newValue
            this.updateSubScribers()
        }
    }
    public get PPP() {
        return this._PPP;
    }
    public set apiUrl(newValue: string) {
        this._apiUrl = newValue
        this.updateSubScribers()
    }


    public static getInstance(): ProgramSettings {
        if (!ProgramSettings.instance) {
            ProgramSettings.instance = new ProgramSettings();
        }
        return ProgramSettings.instance;
    }
}