import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { MenuItem, MenuSection } from "../../logic/types";
import MenuItemView from "./menuItem";
import { getImage } from "./images";
type Props = {
  section: MenuSection
  moveToOos: (title: string) => void
  type: 'SolderableKits' | 'PremiumProducts' | 'Keycaps' | 'Switches' | 'Accessories' | 'Controllers'
}

export default function MenuSectionView({ section, moveToOos, type }: Props) {

  const renderPrice = () => {
    if (section.price > 0) {
      return (<>

        {" "}- <span> ${section.price}</span>
      </>
      )
    }
  }
  return (
    <div className={`flex flex-col w-full justify-between ${type === 'Switches' || type === 'Keycaps' ? 'last:mb-[-.6rem]' : ''}`}>
      {/* <div className="flex items-center"> */}
      {/* <img
                    src={getImage(section.image)}
                    alt={section.image}
                    className=""
                    width="100px"
                    height="100px"
                /> */}
      {/* <div className="w-[100px] h-[100px]"></div> */}

      {/* <h2 className="card-title">{section.title} {renderPrice()}</h2> */}
      {/* </div> */}
      {/* <hr /> */}

      {section.items.map((item, index) => <MenuItemView key={index} item={item} moveToOos={moveToOos} type={type} />)}

    </div>
  );
}
