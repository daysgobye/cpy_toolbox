import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { MenuItem } from "../../logic/types";
import { getImage } from "./images";


type Props = {
    item: MenuItem
    moveToOos: (title: string) => void

}
export default function MenuItemView({ item, moveToOos }: Props) {
    //@ts-ignore
    const renderPrice = () => {
        if (item.price !== undefined) {
            return (<>

                {" "}- <span> ${item.price}</span>
            </>
            )
        }
    }
    const renderSoldOut = () => {
        return (
            <div className="flex w-full  items-center bg-red-500 absolute skew-y-[-7deg]">
                <h2 className="font-bold text-xl text-white text-center w-full">SOLD OUT</h2>

            </div>
        )
    }
    return (
        <div className="flex w-full  items-center relative "
            onClick={() => moveToOos(item.title)}
        >


            <img
                src={getImage(item.image)}
                alt={item.image}
                className=""
                width="75px"
                height="75px"
            />
            <div className="w-[125px] h-[75px]">

            </div>
            <div className="flex flex-col">
                <h2 className="font-bold text-xl">{item.title} {renderPrice()}</h2>
                <p>{item.description}</p>
            </div>
            {item.inStock === false && renderSoldOut()}
        </div>
    );
}
