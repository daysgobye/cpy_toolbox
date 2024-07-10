export type Category = "kit" | "switch" | "component" | "accessories" | "key cap" | "premium product";

export type StockItem = {
    name: string;
    price: number;
    buildGuide?: string;
    category: Category;
    id: string
}
