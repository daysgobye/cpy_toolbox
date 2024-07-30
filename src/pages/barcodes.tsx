import { HeadFC, Link, PageProps } from "gatsby";
import React, { useEffect, useState } from 'react';
import { StockItem } from "../logic/pos/types";
import { StockItemManager } from "../logic/pos/stockItemManger";
import Barcode from "react-barcode";
const stockItemManger = new StockItemManager()

export default function print(props: any) {
    const [StockItems, setStockItems] = React.useState<StockItem[]>(stockItemManger.currentItems)

    return (<div className="flex w-full flex-row flex-wrap justify-around p-[50px]">

        {StockItems.map((item) => (
            <div className="w-1/4 m-4 border-black border-2 break-after">

                <p>{item.category}-{item.name}</p>
                <Barcode value={item.id} />
            </div>

        ))}
    </div>
    );
}
export const Head: HeadFC = () => <title>cpy toolbox</title>;
