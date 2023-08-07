import { Category, StockItem } from "./types";
import stock from "./stock.json";


export class StockItemManager {
    private stockItems: StockItem[];
    currentItems: StockItem[]
    private observers: ((items: StockItem[]) => void)[];
    constructor() {
        this.stockItems = stock as unknown as StockItem[];
        this.currentItems = this.stockItems
        this.observers = [];
    }
    private notifyOfChange(): void {
        this.observers.forEach((observer) => observer(this.currentItems));
    }
    addObserver(observer: ((items: StockItem[]) => void)): void {
        this.observers.push(observer);
    }

    removeObserver(observer: ((items: StockItem[]) => void)): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }


    getItemsByCategory(category: Category) {
        const tempCurrentItems = this.stockItems.filter((item) => item.category === category);
        console.log(tempCurrentItems, category, this.stockItems[0])
        this.currentItems = [...tempCurrentItems]
        this.notifyOfChange()
    }

    getAllItems() {
        this.currentItems = this.stockItems;
        this.notifyOfChange()

    }
}
