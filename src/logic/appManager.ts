import Ide from "./ide";
import { ProgramSettings } from "./programSettings";
import { Serial } from "./serial";

export class AppManager {
    private static instance: AppManager;
    connection: Serial
    ideManager: Ide
    settings: ProgramSettings
    private constructor() {
        this.connection = Serial.getInstance()
        this.settings = ProgramSettings.getInstance()
        this.ideManager = Ide.getInstance()
        this.ideManager.connectionType = this.settings.connectionType
        this.settings.Subscribe(this.settingsSubscription)
        this.connection.Subscribe(this.connectionSubscription)
        this.ideManager.Subscribe(this.ideSubscription)
        this.onReady()
    }

    public static getInstance(): AppManager {
        if (!AppManager.instance) {
            AppManager.instance = new AppManager();
        }
        return AppManager.instance;
    }

    connectionSubscription = () => {
        if (this.settings.autoFileTree && this.connection.connected && !this.ideManager.hasFileSystem) {
            this.ideManager.getFileSystem()
        }
    }
    ideSubscription = () => {

    }
    settingsSubscription = () => {
        if (this.settings.connectionType !== this.ideManager.connectionType) {
            this.ideManager.connectionType = this.settings.connectionType
        }
        if (this.settings.autoConnect && !this.connection.connected) {
            this.connection.reconnect()
        }
    }
    onReady = async () => {
        console.log("appManager is setup and connecting to things")
        if (this.settings.autoConnect) {
            this.connection.reconnect()
        }
        if (this.settings.autoFileTree && this.connection.connected && !this.ideManager.hasFileSystem) {
            this.ideManager.getFileSystem()
        }
    }
    report = () => {
        console.log(this)
    }
}