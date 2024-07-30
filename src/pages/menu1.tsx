import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { MenuSection } from "../logic/types";
import { useState } from "react";
import MenuCard from "../components/menu/menuCard";
import ImageSlideShow from "../components/menu/imageSlideShow";
import { mainImages } from '../logic/mainSlideshowImages'

const defaultData: MenuSection[][] = [
  [
    {
      title: "Premium Products",
      price: 0,
      description: "",
      image: "lily58",
      items: [{
        title: "Rechtek",
        description: "60% Low Profile BLE",
        image: "lily58",
        inStock: true,
        price: 185
      },
      {
        title: "lulu",
        description: "60% Split",
        image: "lily58",
        inStock: true,
        price: 280
      },
      {
        title: "Unicorne",
        description: "40% Split",
        image: "lily58",
        inStock: true,
        price: 225
      },
      {
        title: "Crab Broom",
        description: "30% Split",
        image: "lily58",
        inStock: true,
        price: 145

      },
      {
        title: "Equals Ortho",
        description: "40% / 60% Ortholinear",
        image: "lily58",
        inStock: true,
        price: 220
      },
      {
        title: "Technikable",
        description: "40% Low Profile BLE",
        image: "lily58",
        inStock: true,
        price: 150
      },
      {
        title: "DC32 Artisan",
        description: "Aluminum Artisan Keycap",
        image: "lily58",
        inStock: true,
        price: 45
      },
      ]
    }
  ],
]

export default function MenuPage() {
  const [menu, setMenu] = useState(defaultData),
    [renderedImage, setRenderedImage] = useState(mainImages[0])
  const moveToOos = (title: string) => {
    /* The commented out code block is attempting to update the stock status of an item in the menu based
    on its title. Here's a breakdown of what each part of the code is doing: */
    // const newMenue = menu.map(sections => {
    //   return sections.map(section => {
    //     const newItems = section.items.map(item => {
    //       if (item.title === title) {
    //         return { ...item, inStock: !item.inStock }
    //       } else {
    //         return item
    //       }
    //     })
    //     return { ...section, items: newItems }
    //   }
    //   )
    // })
    // localStorage.setItem("menu", JSON.stringify(menu))
    // setMenu(newMenue)
  }
  const reset = () => {
    localStorage.setItem("menu", JSON.stringify(defaultData))
    setMenu(defaultData)
  }
  return (
    <>
      <div className="flex menu menu_left ">
        {/* <NetBg /> */}
        <div className="flex aspect-video p-[5rem]">
          <div className="flex slideshow aspect-square">
            <ImageSlideShow images={mainImages} setRenderedImage={setRenderedImage} />
          </div>
          <div className="flex h-full bg-white flex-1 ml-[5rem]">
            {menu.map(section => <MenuCard sections={section} moveToOos={moveToOos} type='PremiumProducts' slideShowImage={renderedImage} />)}
          </div>
        </div>
      </div>
    </>
  );
}
export const Head: HeadFC = () => <title>DC-32 menu</title>;
