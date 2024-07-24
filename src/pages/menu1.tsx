import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import NetBg from "../components/menu/backgrounds/nets";
import { MenuSection } from "../logic/types";
import MenuSectionView from "../components/menu/menuSection";
import { useState } from "react";
import MenuCard from "../components/menu/menuCard";
import ImageSlideShow from "../components/menu/imageSlideShow";
import { mainImages } from '../logic/mainSlideshowImages'
import { subTopSlideshowImages } from "../logic/subTopSlideshowImages"
import { subBottomSlideshowImages } from "../logic/subBottomSlideshowImages"



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
        price: 180
      },
      {
        title: "lulu",
        description: "60% Split",
        image: "lily58",
        inStock: true,
        price: 180
      },
      {
        title: "Unicorne",
        description: "40% Split",
        image: "lily58",
        inStock: true,
        price: 180
      },
      {
        title: "Crab Broom",
        description: "30% Split",
        image: "lily58",
        inStock: true,
        price: 180
      },
      {
        title: "Equals Ortho",
        description: "40% / 60% Ortholinear",
        image: "lily58",
        inStock: true,
        price: 180
      },
      {
        title: "Technikable",
        description: "40% Low Profile BLE",
        image: "lily58",
        inStock: true,
        price: 180
      },
      {
        title: "DC32 Artisan",
        description: "Aluminum Artisan Keycap",
        image: "lily58",
        inStock: true,
        price: 180
      },
      ]
    }
  ],
]

const fr4Kits: MenuSection[][] = [
  [
    {
      title: "FR4 Kits",
      price: 0,
      description: "",
      image: "lily58",
      items: [{
        title: "Lily 58",
        description: "60% Split MX/LP Keyboard",
        image: "lily58",
        inStock: true,
        price: 180
      },
      {
        title: "Corne MX",
        description: "40% Split MX Keyboard",
        image: "lily58",
        inStock: true,
        price: 180
      },
      {
        title: "Corne LP",
        description: "40% Split LP Keyboard",
        image: "lily58",
        inStock: true,
        price: 180
      },
      {
        title: "Fight Stick",
        description: "Controller/Fight Stick",
        image: "lily58",
        inStock: true,
        price: 180
      },
      {
        title: "Poker 60 LP",
        description: "60% LP Keyboard",
        image: "lily58",
        inStock: true,
        price: 180
      },
      {
        title: "Equals 60",
        description: "60% Ortholinear Keyboard",
        image: "lily58",
        inStock: true,
        price: 180
      },
      {
        title: "Equals 48",
        description: "40% Ortholinear Keyboard",
        image: "lily58",
        inStock: true,
        price: 180
      },
      {
        title: "Reviung41",
        description: "40% One Piece Ergo Keyboard",
        image: "lily58",
        inStock: true,
        price: 180
      },
      {
        title: "Sweep",
        description: "30% Split Keyboard",
        image: "lily58",
        inStock: true,
        price: 180
      },
      {
        title: "Eternal Gaming Pad",
        description: "60% LP Keyboard",
        image: "lily58",
        inStock: true,
        price: 180
      },
      {
        title: "Phone Controller",
        description: "Mobile/Phone Controller",
        image: "lily58",
        inStock: true,
        price: 180
      },
      {
        title: "3x4 Macro Pad",
        description: "12 Key Macro Pad",
        image: "lily58",
        inStock: true,
        price: 180
      },

      ]
    }
  ]
]

const switchProduct: MenuSection[][] = [
  [
    {
      title: "Switches",
      price: 0,
      description: "",
      image: "lily58",
      items: [{
        title: "MX Switches",
        description: "25g LP Linear",
        image: "lily58",
        inStock: true,
        price: 1000
      },
      {
        title: "Gat Yellow",
        description: "50g MX Linear",
        image: "lily58",
        inStock: true,
        price: 6
      },
      {
        title: "Gat Blue",
        description: "67g MX Clicky",
        image: "lily58",
        inStock: true,
        price: 6
      },
      {
        title: "Gat Brown",
        description: "45g MX Tactile",
        image: "lily58",
        inStock: true,
        price: 6
      },
      {
        title: "Gat Clear",
        description: "35g MX Linear",
        image: "lily58",
        inStock: true,
        price: 16
      },
      {
        title: "Speed Silver",
        description: "48g MX Linear",
        image: "lily58",
        inStock: true,
        price: 8
      },
      {
        title: "Choc Switches",
        description: "25g LP Linear",
        image: "lily58",
        inStock: true,
        price: 1000
      },
      {
        title: "Choc Purpz",
        description: "25g LP Linear",
        image: "lily58",
        inStock: true,
        price: 18
      },
      {
        title: "Choc Pro Red",
        description: "35g LP Linear",
        image: "lily58",
        inStock: true,
        price: 18
      },
      {
        title: "?Choc Red",
        description: "35g LP Linear",
        image: "lily58",
        inStock: true,
        price: 18
      },
      {
        title: "?Choc Brown",
        description: "35g LP Linear",
        image: "lily58",
        inStock: true,
        price: 18
      },
      {
        title: "?Choc White",
        description: "35g LP Linear",
        image: "lily58",
        inStock: true,
        price: 18
      },

      ]
    }
  ]
]

const keycapProduct: MenuSection[][] = [
  [
    {
      title: "Keycaps",
      price: 0,
      description: "",
      image: "lily58",
      items: [
        {
          title: "Choc Keycaps",
          description: "50g MX Linear",
          image: "lily58",
          inStock: true,
          price: 1000
        },
        {
          title: "MBK Engage",
          description: "50g MX Linear",
          image: "lily58",
          inStock: true,
          price: 90
        },
        {
          title: "MBK Glow",
          description: "67g MX Clicky",
          image: "lily58",
          inStock: true,
          price: 55
        },
        {
          title: "Blank MBK",
          description: "45g MX Tactile",
          image: "lily58",
          inStock: true,
          price: 16
        },
        {
          title: "MX Keycaps",
          description: "50g MX Linear",
          image: "lily58",
          inStock: true,
          price: 1000
        },
        {
          title: "Blank XDA",
          description: "35g MX Linear",
          image: "lily58",
          inStock: true,
          price: 16
        },
        {
          title: "TKL Sets",
          description: "48g MX Linear",
          image: "lily58",
          inStock: true,
          price: 20
        },
        {
          title: "MDA Future Suzuri",
          description: "25g LP Linear",
          image: "lily58",
          inStock: true,
          price: 90
        },
      ]
    }
  ]
]




export default function MenuPage() {
  const [menu, setMenu] = useState(defaultData),
    [solderableKits, setSolderableKits] = useState(fr4Kits),
    [switchList, setSwitchList] = useState(switchProduct),
    [keycapList, setKeycapList] = useState(keycapProduct),
    [renderedImage, setRenderedImage] = useState(mainImages[0])
  // React.useEffect(() => {
  //   const currentData = localStorage.getItem("menu")
  //   if (currentData) {
  //     setMenu(JSON.parse(currentData))
  //   } else {
  //     localStorage.setItem("menu", JSON.stringify(menu))
  //   }
  // }, [])
  const moveToOos = (title: string) => {
    const newMenue = menu.map(sections => {

      return sections.map(section => {
        const newItems = section.items.map(item => {
          if (item.title === title) {
            return { ...item, inStock: !item.inStock }
          } else {
            return item
          }
        })
        return { ...section, items: newItems }
      }

      )

    })
    localStorage.setItem("menu", JSON.stringify(menu))
    setMenu(newMenue)
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
            {/* <PremiumProduct /> */}
            {menu.map(section => <MenuCard sections={section} moveToOos={moveToOos} type='PremiumProducts' slideShowImage={renderedImage} />)}
            {/* <div
              className="absolute w-[100px] h-[100px] bg-rose-500 opacity-1 hover:opacity-100	 "
              onClick={reset}
            >
              RESET MENUE
            </div> */}
          </div>
        </div>
      </div>






    </>










    //   <div className="menu_left">
    //   {/* <NetBg /> */}
    //   <div className="flex items-center justify-center h-screen ">
    //     <ImageSlideShow />
    //     {menu.map(section => <MenuCard sections={section} moveToOos={moveToOos} />)}
    //   </div>
    //   <div
    //     className="absolute w-[100px] h-[100px] bg-rose-500 opacity-0 hover:opacity-100	 "
    //     onClick={reset}
    //   >
    //     RESET MENUE
    //   </div>
    // </div>
  );
}
export const Head: HeadFC = () => <title>DC-32 menu</title>;
