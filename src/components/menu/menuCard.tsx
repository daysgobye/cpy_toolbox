import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { MenuItem, MenuSection } from "../../logic/types";
import MenuItemView from "./menuItem";
import MenuSectionView from "./menuSection";
type Props = {
    sections: MenuSection[]
    moveToOos: (title: string) => void
}

export default function MenuCard({ sections, moveToOos }: Props) {


    return (
        <div className="card bg-white shadow-xl mr-[150px] last:mr-0">
            <div className="card-body">

                {sections.map((section, index) => (
                    <MenuSectionView key={index} section={section} moveToOos={moveToOos} />
                ))}
            </div>
        </div>
    );
}
