export type Category = "kit" | "switch" | "component" | "premium product";

export type StockItem = {
    name: string;
    price: number;
    buildGuide?: string;
    category: Category;
}
