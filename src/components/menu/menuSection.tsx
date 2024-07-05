import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { MenuItem, MenuSection } from "../../logic/types";
import MenuItemView from "./menuItem";
import { getImage } from "./images";
type Props = {
    section: MenuSection
    moveToOos: (title: string) => void
}

export default function MenuSectionView({ section, moveToOos }: Props) {

    const renderPrice = () => {
        if (section.price > 0) {
            return (<>

                {" "}- <span> ${section.price}</span>
            </>
            )
        }
    }
    return (
        <div className="flex flex-col items-center justify-center w-full ">
            <div className="flex w-full  items-center border-b-2 border-gray-300">
                <img
                    src={getImage(section.image)}
                    alt={section.image}
                    className=""
                    width="100px"
                    height="100px"
                />
                <div className="w-[100px] h-[100px]"></div>

                <h2 className="card-title">{section.title} {renderPrice()}</h2>
            </div>
            <hr />

            {section.items.map((item, index) => <MenuItemView key={index} item={item} moveToOos={moveToOos} />)}

        </div>
    );
}
