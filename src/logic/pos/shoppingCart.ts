import { StockItem } from "./types";

export type CartStockItem = StockItem & { quantity: number }
export class ShoppingCart {
    private items: CartStockItem[];
    private observers: ((items: CartStockItem[]) => void)[];

    constructor() {
        this.items = [];
        this.observers = [];
    }
    private notifyOfChange(): void {
        this.observers.forEach((observer) => observer(this.items));
    }
    addObserver(observer: ((items: CartStockItem[]) => void)): void {
        this.observers.push(observer);
    }

    removeObserver(observer: ((items: CartStockItem[]) => void)): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    addItem(item: StockItem): void {
        const existingItem = this.items.find((i) => i.name === item.name);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            const tempItem = { ...item, quantity: 1 }

            this.items.push(tempItem);
        }

        this.notifyOfChange()
    }

    removeItem(item: StockItem): void {
        const existingItemIndex = this.items.findIndex((i) => i.name === item.name);
        if (existingItemIndex !== -1) {
            this.items.splice(existingItemIndex, 1);
        }
        this.notifyOfChange()

    }

    increaseQuantity(item: StockItem): void {
        const existingItem = this.items.find((i) => i.name === item.name);

        if (existingItem) {
            existingItem.quantity++;
        }
        this.notifyOfChange()

    }

    decreaseQuantity(item: StockItem): void {
        const existingItemIndex = this.items.findIndex((i) => i.name === item.name);

        if (existingItemIndex !== -1) {
            const existingItem = this.items[existingItemIndex];

            if (existingItem.quantity > 1) {
                existingItem.quantity--;
            } else {
                this.items.splice(existingItemIndex, 1);
            }
        }
        this.notifyOfChange()

    }

    clear(): void {
        this.items = [];
        this.notifyOfChange()

    }


}
