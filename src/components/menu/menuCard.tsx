import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { MenuItem, MenuSection } from "../../logic/types";
import MenuItemView from "./menuItem";
import MenuSectionView from "./menuSection";
type Props = {
  sections: MenuSection[]
  moveToOos: (title: string) => void
  type: 'SolderableKits' | 'PremiumProducts' | 'Keycaps' | 'Switches' | 'Accessories' | 'Controllers'

}

export default function MenuCard({ sections, moveToOos, type }: Props) {


  return (
    <div className={`flex w-full h-full bg-white rounded-xl shadow-xl ${type !== 'Switches' && type !== 'Keycaps' ? 'p-10' : 'p-5'}`}>
      {sections.map((section, index) => (
        <MenuSectionView key={index} section={section} moveToOos={moveToOos} type={type} />
      ))}
    </div>
  );
}
