import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { MenuSection } from "../logic/types";

import { useState } from "react";

import { mainImages } from '../logic/mainSlideshowImages'
import { subTopSlideshowImages } from "../logic/subTopSlideshowImages"
import { subBottomSlideshowImages } from "../logic/subBottomSlideshowImages"
import ImageSlideShow from "../components/menu/imageSlideShow";
import MenuCard from "../components/menu/menuCard";





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
  const [solderableKits, setSolderableKits] = useState(fr4Kits),
    [switchList, setSwitchList] = useState(switchProduct),
    [keycapList, setKeycapList] = useState(keycapProduct),
    [renderedImageOne, setRenderedImageOne] = useState(subTopSlideshowImages[0]),
    [renderedImageTwo, setRenderedImageTwo] = useState(subBottomSlideshowImages[0])
  // React.useEffect(() => {
  //   const kcurrentData = localStorage.getItem("kmenu")
  //   const scurrentData = localStorage.getItem("smenu")
  //   const ccurrentData = localStorage.getItem("cmenu")
  //   if (kcurrentData) {
  //     setSolderableKits(JSON.parse(kcurrentData))
  //   } else {
  //     localStorage.setItem("kmenu", JSON.stringify(fr4Kits))
  //   }
  //   if (scurrentData) {
  //     setSwitchList(JSON.parse(scurrentData))
  //   } else {
  //     localStorage.setItem("smenu", JSON.stringify(switchProduct))
  //   }
  //   if (ccurrentData) {
  //     setSwitchList(JSON.parse(ccurrentData))
  //   } else {
  //     localStorage.setItem("cmenu", JSON.stringify(keycapProduct))
  //   }
  // }, [])
  const moveToOos = (title: string) => {
    const newMenue = solderableKits.map(sections => {
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
    localStorage.setItem("kmenu", JSON.stringify(solderableKits))
    setSolderableKits(newMenue)
  }

  const moveToOosSwitch = (title: string) => {
    const newMenue = switchList.map(sections => {
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
    localStorage.setItem("smenu", JSON.stringify(switchList))
    setSwitchList(newMenue)
  }
  const moveToOosKeycap = (title: string) => {
    const newMenue = keycapList.map(sections => {
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
    localStorage.setItem("cmenu", JSON.stringify(keycapList))
    setSolderableKits(newMenue)
  }



  const reset = () => {
    localStorage.setItem("kmenu", JSON.stringify(fr4Kits))
    setSolderableKits(fr4Kits)
    localStorage.setItem("cmenu", JSON.stringify(keycapProduct))
    setKeycapList(keycapProduct)
    localStorage.setItem("smenu", JSON.stringify(switchProduct))
    setSwitchList(switchProduct)
  }
  return (
    <>


      <div className="flex fr4Kits menu_right bg-purple-100">
        {/* <NetBg /> */}
        <div className="flex aspect-video p-[5rem]">
          <div className="flex h-full flex-1 mr-[3.5rem]">
            {/* <PremiumProduct /> */}
            {solderableKits.map(section => <MenuCard sections={section} moveToOos={moveToOos} type='SolderableKits' slideShowImage={renderedImageOne} />)}
            <div
              className="absolute w-[100px] h-[100px] bg-rose-500 opacity-0 hover:opacity-100	 "
              onClick={reset}
            >
              RESET MENUE
            </div>
          </div>
          <div className="flex flex-col w-1/2 h-full">
            <div className="flex h-1/2 justify-between">
              <div className="flex slideshow aspect-square w-1/2 max-w-[47%]">
                <ImageSlideShow small images={subTopSlideshowImages} setRenderedImage={setRenderedImageOne} />
              </div>
              {/* <div className="w-[3rem]"></div> */}
              <div className="test fr4Kits flex-1 h-full aspect-square w-1/2 max-w-[47%]">
                {switchList.map(section => <MenuCard sections={section} moveToOos={moveToOosSwitch} type='Switches' slideShowImage={renderedImageOne} />)}
              </div>
            </div>
            <div className="h-[3.25rem]"></div>
            <div className="flex h-1/2 justify-between">
              <div className="test fr4Kits flex-1 h-full aspect-square w-1/2 max-w-[47%]">
                {keycapList.map(section => <MenuCard sections={section} moveToOos={moveToOosKeycap} type='Keycaps' slideShowImage={renderedImageTwo} />)}
              </div>
              {/* <div className="w-[3rem]"></div> */}
              <div className="flex slideshow aspect-square w-1/2 max-w-[47%]">
                <ImageSlideShow small images={subBottomSlideshowImages} setRenderedImage={setRenderedImageTwo} />
              </div>
            </div>
          </div>

        </div>
      </div>

    </>










    //   <div className="menu_left">
    //   {/* <NetBg /> */}
    //   <div className="flex items-center justify-center h-screen ">
    //     <ImageSlideShow />
    //     {fr4Kits.map(section => <MenuCard sections={section} moveToOos={moveToOos} />)}
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
export const Head: HeadFC = () => <title>DC-32 fr4Kits</title>;
