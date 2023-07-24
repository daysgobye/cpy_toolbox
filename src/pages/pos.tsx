import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import Layout from "../components/layout";
import { CartStockItem, ShoppingCart } from "../logic/pos/shoppingCart";
import { StockItemManager } from "../logic/pos/stockItemManger";
import { StockItem, Category } from "../logic/pos/types";

const shoppingCart = new ShoppingCart()
const stockItemManger = new StockItemManager()
export default function IndexPage() {
    const [items, setItems] = React.useState<CartStockItem[]>([]),
        [StockItems, setStockItems] = React.useState<StockItem[]>(stockItemManger.currentItems),
        categories: Category[] = ["kit", "switch", "component", "premium product"]
    const updateItems = (items: CartStockItem[]) => {
        setItems([...items])
    }
    const updateStockItems = (items: StockItem[]) => setStockItems([...items])

    React.useEffect(() => {

        shoppingCart.addObserver(updateItems)
        stockItemManger.addObserver(updateStockItems)
        return () => {
            stockItemManger.removeObserver(updateStockItems)
            shoppingCart.removeObserver(updateItems)
        }
    })
    const addToCart = (item: StockItem) => {
        shoppingCart.addItem(item);
    };

    const removeFromCart = (item: StockItem) => {
        shoppingCart.removeItem(item);
    };

    const increaseQuantity = (item: StockItem) => {
        shoppingCart.increaseQuantity(item);
    };

    const decreaseQuantity = (item: StockItem) => {
        shoppingCart.decreaseQuantity(item);
    };

    const clearCart = () => {
        shoppingCart.clear();
    };


    const getTotal = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };



    return (
        <div className="flex">
            <div className="w-7/12">
                <div className="flex justify-between mb-4">
                    <button
                        className="px-2 py-1 bg-blue-500 text-white rounded"
                        onClick={() => stockItemManger.getAllItems()}
                    >
                        View All
                    </button>
                    <button
                        className="px-2 py-1 bg-blue-500 text-white rounded"
                        onClick={() =>
                            stockItemManger.getItemsByCategory("kit")
                        }
                    >
                        Filter Kit
                    </button>
                    <button
                        className="px-2 py-1 bg-blue-500 text-white rounded"
                        onClick={() =>
                            stockItemManger.getItemsByCategory("switch")

                        }
                    >
                        Filter Switch
                    </button>
                    <button
                        className="px-2 py-1 bg-blue-500 text-white rounded"
                        onClick={() =>
                            stockItemManger.getItemsByCategory("component")

                        }
                    >
                        Filter Component
                    </button>
                </div>
                <div className="flex flex-wrap">
                    {StockItems.map((item) => (
                        <button
                            key={item.name}
                            className="w-1/2 p-2 border border-gray-300"
                            onClick={() => addToCart(item)}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className="w-5/12">
                <div className="flex justify-between mb-4">
                    <button
                        className="px-2 py-1 bg-red-500 text-white rounded"
                        onClick={clearCart}
                    >
                        Clear Cart
                    </button>
                    <Link
                        to={"/print"}
                        state={{ items: items, total: getTotal() }}
                    >
                        <button
                            className="px-2 py-1 bg-green-500 text-white rounded"
                        // onClick={print}
                        >
                            Print
                        </button></Link>
                </div>
                <ul>
                    {items.map((item) => (
                        <li key={item.name} className="flex justify-between mb-2">
                            <div>
                                {item.name} - {item.price} - Qty: {item.quantity}
                            </div>
                            <div>
                                <button
                                    className="px-1 bg-blue-500 text-white rounded mr-2"
                                    onClick={() => increaseQuantity(item)}
                                >
                                    +
                                </button>
                                <button
                                    className="px-1 bg-blue-500 text-white rounded mr-2"
                                    onClick={() => decreaseQuantity(item)}
                                >
                                    -
                                </button>
                                <button
                                    className="px-1 bg-red-500 text-white rounded"
                                    onClick={() => removeFromCart(item)}
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="mt-4">Total: ${getTotal()}</div>
            </div>
        </div>
    );
}
export const Head: HeadFC = () => <title>cpy toolbox</title>;
