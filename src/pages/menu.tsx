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
//@ts-ignore
import rechtekLightTopDown from '../images/menuImages/_rechtek_engage_light_top_down_1_1.jpg'
//@ts-ignore
import corneDCArtisanFull from '../images/menuImages/corne_dc_32_artisan_engage_1.jpg'
//@ts-ignore
import corneTentedEngage from '../images/menuImages/corne_tented_engage_dark.jpg'
//@ts-ignore
import rechtekDark from '../images/menuImages/_rechtek_black_engage_dark_top_down_1_1.jpg'




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
  const [menu, setMenu] = useState(defaultData)
  const [solderableKits, setSolderableKits] = useState(fr4Kits)
  const [switchList, setSwitchList] = useState(switchProduct)
  const [keycapList, setKeycapList] = useState(keycapProduct)
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
      <div className="flex menu menu_left hidden">
        {/* <NetBg /> */}
        <div className="flex aspect-video p-[5rem]">
          <div className="flex slideshow aspect-square">
            <ImageSlideShow images={mainImages} />
          </div>
          <div className="flex h-full bg-white flex-1 ml-[5rem]">
            {/* <PremiumProduct /> */}
            {menu.map(section => <MenuCard sections={section} moveToOos={moveToOos} type='PremiumProducts' />)}
            {/* <div
              className="absolute w-[100px] h-[100px] bg-rose-500 opacity-1 hover:opacity-100	 "
              onClick={reset}
            >
              RESET MENUE
            </div> */}
          </div>
        </div>
      </div>




      <div className="flex menu menu_center justify-center hidden">
        {/* <NetBg /> */}
        <div className="flex aspect-video p-[5rem] bg-green-300 self-center justify-center flex-1 h-full">
          <div className="center flex flex-col self-center bg-red-200 flex-1">
            <div className="w-[200px] h-[200px]">
              <svg id="Isolation_Mode" data-name="Isolation Mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1793.07 1819.94">
                <path id="Combined-Shape" className="cls-2 stroke-[0px] fill-[#805FF7]" d="M896.54,0c495.14,0,896.54,407.41,896.54,909.97s-401.39,909.97-896.54,909.97S0,1412.53,0,909.97,401.39,0,896.54,0ZM896.54,127.4c-425.82,0-771.02,350.37-771.02,782.57s345.2,782.57,771.02,782.57,771.02-350.37,771.02-782.57S1322.36,127.4,896.54,127.4Z" />
                <ellipse id="Oval" className="cls-1 fill-[#98fce9] stroke-[0px]" cx="896.54" cy="909.97" rx="110.54" ry="112.2" />
              </svg>
            </div>
            <div className="w-[150px]">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1612.14 206.8">
                <path className="cls-1 stroke-[0px] fill-[#000]" d="M63.58,8.8c11.73,0,21.12,3.38,28.16,10.12,7.04,6.75,10.56,15.84,10.56,27.28,0,6.02-1.21,11.85-3.63,17.49-2.42,5.65-5.98,10.3-10.67,13.97-4.7,3.67-10.49,5.8-17.38,6.38l-1.54-2.64c5.72,0,11.07.85,16.06,2.53,4.98,1.69,9.31,4.22,12.98,7.59,3.66,3.38,6.56,7.52,8.69,12.43,2.12,4.92,3.19,10.67,3.19,17.27,0,7.04-1.18,13.17-3.52,18.37-2.35,5.21-5.58,9.54-9.68,12.98-4.11,3.45-8.88,6.02-14.3,7.7-5.43,1.69-11.22,2.53-17.38,2.53H4.4c-1.18,0-2.2-.44-3.08-1.32-.88-.88-1.32-1.9-1.32-3.08V13.2c0-1.17.44-2.2,1.32-3.08.88-.88,1.9-1.32,3.08-1.32h59.18ZM62.48,17.6H6.82l2.42-4.18v69.74l-2.2-3.74h55.44c8.65-.14,15.91-3,21.78-8.58,5.86-5.57,8.8-13.86,8.8-24.86,0-8.5-2.64-15.36-7.92-20.57-5.28-5.2-12.83-7.81-22.66-7.81ZM64.02,88.44H8.36l.88-1.32v68.64l-1.1-1.76h55.88c10.41,0,19.14-2.6,26.18-7.81,7.04-5.21,10.56-13.53,10.56-24.97,0-7.62-1.62-13.86-4.84-18.7-3.23-4.84-7.63-8.39-13.2-10.67-5.58-2.27-11.81-3.41-18.7-3.41Z" />
                <path className="cls-1 stroke-[0px] fill-[#000]" d="M239.8,107.36c0,10.86-2.35,20.64-7.04,29.37-4.7,8.73-11.11,15.62-19.25,20.68-8.14,5.06-17.42,7.59-27.83,7.59s-19.51-2.53-27.72-7.59c-8.21-5.06-14.71-11.95-19.47-20.68-4.77-8.72-7.15-18.51-7.15-29.37s2.38-20.86,7.15-29.59c4.76-8.72,11.25-15.62,19.47-20.68,8.21-5.06,17.45-7.59,27.72-7.59s19.69,2.53,27.83,7.59c8.14,5.06,14.55,11.96,19.25,20.68,4.69,8.73,7.04,18.59,7.04,29.59ZM231,107.36c0-9.53-1.95-18-5.83-25.41-3.89-7.4-9.24-13.27-16.06-17.6-6.82-4.32-14.63-6.49-23.43-6.49s-16.43,2.17-23.32,6.49c-6.9,4.33-12.32,10.2-16.28,17.6-3.96,7.41-5.94,15.88-5.94,25.41s1.98,17.79,5.94,25.19c3.96,7.41,9.38,13.28,16.28,17.6,6.89,4.33,14.66,6.49,23.32,6.49s16.61-2.16,23.43-6.49c6.82-4.32,12.17-10.19,16.06-17.6,3.88-7.4,5.83-15.8,5.83-25.19Z" />
                <path className="cls-1 stroke-[0px] fill-[#000]" d="M358.6,53.02c1.32,0,2.38.44,3.19,1.32.8.88,1.21,1.91,1.21,3.08v100.98c0,1.18-.44,2.2-1.32,3.08-.88.88-1.91,1.32-3.08,1.32-1.32,0-2.39-.44-3.19-1.32-.81-.88-1.21-1.9-1.21-3.08v-31.24l3.52-2.86c0,4.7-1.18,9.46-3.52,14.3-2.35,4.84-5.58,9.24-9.68,13.2-4.11,3.96-8.95,7.15-14.52,9.57-5.58,2.42-11.59,3.63-18.04,3.63-9.83,0-18.59-2.56-26.29-7.7-7.7-5.13-13.75-12.1-18.15-20.9-4.4-8.8-6.6-18.7-6.6-29.7s2.23-21.01,6.71-29.59c4.47-8.58,10.56-15.32,18.26-20.24,7.7-4.91,16.39-7.37,26.07-7.37,6.3,0,12.25,1.14,17.82,3.41,5.57,2.28,10.45,5.47,14.63,9.57,4.18,4.11,7.44,8.91,9.79,14.41,2.34,5.5,3.52,11.48,3.52,17.93l-3.52-5.5v-31.9c0-1.17.4-2.2,1.21-3.08.8-.88,1.87-1.32,3.19-1.32ZM312.4,156.64c8.21,0,15.54-2.16,22-6.49,6.45-4.32,11.51-10.26,15.18-17.82,3.67-7.55,5.5-16.09,5.5-25.63s-1.83-17.34-5.5-24.75c-3.67-7.4-8.73-13.27-15.18-17.6-6.46-4.32-13.79-6.49-22-6.49s-15.33,2.09-21.78,6.27c-6.46,4.18-11.55,9.94-15.29,17.27-3.74,7.34-5.61,15.77-5.61,25.3s1.83,18.08,5.5,25.63c3.66,7.56,8.72,13.5,15.18,17.82,6.45,4.33,13.78,6.49,22,6.49Z" />
                <path className="cls-1 stroke-[0px] fill-[#000]" d="M403.92,162.8c-1.32,0-2.39-.44-3.19-1.32-.81-.88-1.21-1.9-1.21-3.08V57.42c0-1.17.44-2.2,1.32-3.08s1.9-1.32,3.08-1.32c1.32,0,2.38.44,3.19,1.32.8.88,1.21,1.91,1.21,3.08v37.18l-3.74,5.72c0-5.72.99-11.51,2.97-17.38,1.98-5.87,4.87-11.33,8.69-16.39,3.81-5.06,8.47-9.16,13.97-12.32,5.5-3.15,11.84-4.73,19.03-4.73,2.05,0,4.25.3,6.6.88,2.34.59,3.52,1.98,3.52,4.18,0,1.32-.37,2.42-1.1,3.3-.74.88-1.69,1.32-2.86,1.32-.88,0-1.95-.33-3.19-.99-1.25-.66-3.05-.99-5.39-.99-4.7,0-9.32,1.39-13.86,4.18-4.55,2.79-8.69,6.49-12.43,11.11-3.74,4.62-6.71,9.65-8.91,15.07-2.2,5.43-3.3,10.71-3.3,15.84v55c0,1.18-.44,2.2-1.32,3.08-.88.88-1.91,1.32-3.08,1.32Z" />
                <path className="cls-1 stroke-[0px] fill-[#000]" d="M565.62,0c1.32,0,2.38.44,3.19,1.32.8.88,1.21,1.91,1.21,3.08v154c0,1.18-.44,2.2-1.32,3.08-.88.88-1.91,1.32-3.08,1.32-1.32,0-2.39-.44-3.19-1.32-.81-.88-1.21-1.9-1.21-3.08v-31.24l3.52-4.84c0,4.99-1.14,10.01-3.41,15.07-2.28,5.06-5.5,9.68-9.68,13.86s-9.06,7.52-14.63,10.01c-5.58,2.49-11.59,3.74-18.04,3.74-9.68,0-18.37-2.53-26.07-7.59-7.7-5.06-13.79-11.95-18.26-20.68-4.48-8.72-6.71-18.59-6.71-29.59s2.23-20.86,6.71-29.59c4.47-8.72,10.56-15.58,18.26-20.57,7.7-4.98,16.39-7.48,26.07-7.48,6.01,0,11.77,1.14,17.27,3.41,5.5,2.28,10.37,5.47,14.63,9.57,4.25,4.11,7.62,8.91,10.12,14.41,2.49,5.5,3.74,11.48,3.74,17.93l-3.52-5.5V4.4c0-1.17.4-2.2,1.21-3.08.8-.88,1.87-1.32,3.19-1.32ZM519.42,156.64c8.36,0,15.73-2.12,22.11-6.38,6.38-4.25,11.4-10.12,15.07-17.6,3.67-7.48,5.5-15.98,5.5-25.52s-1.83-18-5.5-25.41c-3.67-7.4-8.73-13.23-15.18-17.49-6.46-4.25-13.79-6.38-22-6.38s-15.33,2.13-21.78,6.38c-6.46,4.26-11.55,10.09-15.29,17.49-3.74,7.41-5.61,15.88-5.61,25.41s1.87,17.82,5.61,25.3c3.74,7.48,8.83,13.38,15.29,17.71,6.45,4.33,13.71,6.49,21.78,6.49Z" />
                <path className="cls-1 stroke-[0px] fill-[#000]" d="M600.37,145.2c-1.03-1.76-1.5-3.19-1.43-4.29.07-1.1.62-2.01,1.65-2.75.73-.73,1.72-1.06,2.97-.99,1.24.08,2.31.63,3.19,1.65,3.81,5.43,8.69,9.83,14.63,13.2,5.94,3.38,12.94,5.06,21.01,5.06,4.84,0,9.49-.8,13.97-2.42,4.47-1.61,8.14-4.03,11-7.26,2.86-3.22,4.29-7.18,4.29-11.88,0-4.98-1.4-8.98-4.18-11.99-2.79-3-6.38-5.39-10.78-7.15s-9.02-3.22-13.86-4.4c-5.13-1.32-10.01-2.82-14.63-4.51-4.62-1.68-8.69-3.81-12.21-6.38-3.52-2.56-6.31-5.61-8.36-9.13-2.06-3.52-3.08-7.7-3.08-12.54,0-5.72,1.54-10.85,4.62-15.4,3.08-4.54,7.4-8.1,12.98-10.67,5.57-2.56,12.02-3.85,19.36-3.85,3.52,0,7.26.44,11.22,1.32,3.96.88,7.92,2.39,11.88,4.51,3.96,2.13,7.62,5.1,11,8.91,1.17.88,1.72,1.95,1.65,3.19-.08,1.25-.63,2.39-1.65,3.41-.88.59-1.84.88-2.86.88s-1.91-.44-2.64-1.32c-3.82-4.25-8.25-7.4-13.31-9.46-5.06-2.05-10.45-3.08-16.17-3.08-4.84,0-9.35.81-13.53,2.42-4.18,1.62-7.59,4-10.23,7.15-2.64,3.16-3.96,7.15-3.96,11.99.29,4.55,1.87,8.29,4.73,11.22,2.86,2.94,6.67,5.36,11.44,7.26,4.76,1.91,10.16,3.67,16.17,5.28,4.84,1.18,9.35,2.53,13.53,4.07,4.18,1.54,7.84,3.49,11,5.83,3.15,2.35,5.64,5.28,7.48,8.8,1.83,3.52,2.75,7.92,2.75,13.2,0,6.16-1.65,11.48-4.95,15.95-3.3,4.47-7.85,7.92-13.64,10.34-5.8,2.42-12.43,3.63-19.91,3.63s-14.96-1.54-22-4.62-13.42-8.14-19.14-15.18Z" />
                <path className="cls-1 stroke-[0px] fill-[#000]" d="M809.59,107.36c0,10.86-2.35,20.64-7.04,29.37-4.7,8.73-11.11,15.62-19.25,20.68-8.14,5.06-17.42,7.59-27.83,7.59s-19.51-2.53-27.72-7.59c-8.21-5.06-14.71-11.95-19.47-20.68-4.77-8.72-7.15-18.51-7.15-29.37s2.38-20.86,7.15-29.59c4.76-8.72,11.25-15.62,19.47-20.68,8.21-5.06,17.45-7.59,27.72-7.59s19.69,2.53,27.83,7.59c8.14,5.06,14.55,11.96,19.25,20.68,4.69,8.73,7.04,18.59,7.04,29.59ZM800.79,107.36c0-9.53-1.95-18-5.83-25.41-3.89-7.4-9.24-13.27-16.06-17.6-6.82-4.32-14.63-6.49-23.43-6.49s-16.43,2.17-23.32,6.49c-6.9,4.33-12.32,10.2-16.28,17.6-3.96,7.41-5.94,15.88-5.94,25.41s1.98,17.79,5.94,25.19c3.96,7.41,9.38,13.28,16.28,17.6,6.89,4.33,14.66,6.49,23.32,6.49s16.61-2.16,23.43-6.49c6.82-4.32,12.17-10.19,16.06-17.6,3.88-7.4,5.83-15.8,5.83-25.19Z" />
                <path className="cls-1 stroke-[0px] fill-[#000]" d="M921.35,53.02c1.32,0,2.38.44,3.19,1.32.8.88,1.21,1.91,1.21,3.08v64.02c0,14.23-4,24.9-11.99,32.01-8,7.12-18.59,10.67-31.79,10.67s-23.58-3.55-31.57-10.67c-8-7.11-11.99-17.78-11.99-32.01V57.42c0-1.17.44-2.2,1.32-3.08s1.9-1.32,3.08-1.32c1.32,0,2.38.44,3.19,1.32.8.88,1.21,1.91,1.21,3.08v64.02c0,11.15,3.12,19.65,9.35,25.52,6.23,5.87,14.7,8.8,25.41,8.8s19.39-2.93,25.63-8.8c6.23-5.87,9.35-14.37,9.35-25.52V57.42c0-1.17.4-2.2,1.21-3.08.8-.88,1.87-1.32,3.19-1.32Z" />
                <path className="cls-1 stroke-[0px] fill-[#000]" d="M966.67,162.8c-1.32,0-2.39-.44-3.19-1.32-.81-.88-1.21-1.9-1.21-3.08V57.42c0-1.17.44-2.2,1.32-3.08s1.9-1.32,3.08-1.32c1.32,0,2.38.44,3.19,1.32.8.88,1.21,1.91,1.21,3.08v37.18l-3.74,5.72c0-5.72.99-11.51,2.97-17.38,1.98-5.87,4.87-11.33,8.69-16.39,3.81-5.06,8.47-9.16,13.97-12.32,5.5-3.15,11.84-4.73,19.03-4.73,2.05,0,4.25.3,6.6.88,2.34.59,3.52,1.98,3.52,4.18,0,1.32-.37,2.42-1.1,3.3-.74.88-1.69,1.32-2.86,1.32-.88,0-1.95-.33-3.19-.99-1.25-.66-3.05-.99-5.39-.99-4.7,0-9.32,1.39-13.86,4.18-4.55,2.79-8.69,6.49-12.43,11.11-3.74,4.62-6.71,9.65-8.91,15.07-2.2,5.43-3.3,10.71-3.3,15.84v55c0,1.18-.44,2.2-1.32,3.08-.88.88-1.91,1.32-3.08,1.32Z" />
                <path className="cls-1 stroke-[0px] fill-[#000]" d="M1086.13,49.5c6.6,0,12.79.74,18.59,2.2,5.79,1.47,10.48,3.41,14.08,5.83,3.59,2.42,5.39,4.95,5.39,7.59,0,1.03-.41,2.02-1.21,2.97-.81.96-1.8,1.43-2.97,1.43-1.62,0-2.9-.44-3.85-1.32-.96-.88-1.95-1.94-2.97-3.19-1.03-1.24-2.64-2.38-4.84-3.41-2.06-1.02-4.95-1.9-8.69-2.64-3.74-.73-8.33-1.1-13.75-1.1-8.51,0-16.28,2.2-23.32,6.6s-12.65,10.31-16.83,17.71c-4.18,7.41-6.27,15.73-6.27,24.97s1.94,17.82,5.83,25.3c3.88,7.48,9.31,13.38,16.28,17.71,6.96,4.33,15.07,6.49,24.31,6.49,6.6,0,11.62-.62,15.07-1.87,3.44-1.25,6.42-2.6,8.91-4.07,3.08-1.76,5.21-3.45,6.38-5.06,1.17-1.61,2.56-2.42,4.18-2.42,1.17,0,2.09.37,2.75,1.1.66.74.99,1.69.99,2.86,0,1.76-1.62,4.07-4.84,6.93-3.23,2.86-7.74,5.39-13.53,7.59-5.8,2.2-12.65,3.3-20.57,3.3-10.71,0-20.17-2.53-28.38-7.59-8.22-5.06-14.63-11.95-19.25-20.68-4.62-8.72-6.93-18.59-6.93-29.59,0-10.26,2.31-19.76,6.93-28.49,4.62-8.72,11.07-15.76,19.36-21.12,8.29-5.35,18-8.03,29.15-8.03Z" />
                <path className="cls-1 stroke-[0px] fill-[#000]" d="M1199.87,165c-11,0-20.72-2.34-29.15-7.04-8.44-4.69-15.07-11.33-19.91-19.91s-7.26-18.66-7.26-30.25c0-12.32,2.38-22.8,7.15-31.46,4.76-8.65,10.92-15.29,18.48-19.91,7.55-4.62,15.58-6.93,24.09-6.93,6.16,0,12.17.99,18.04,2.97,5.86,1.98,11.11,5.06,15.73,9.24s8.36,9.39,11.22,15.62c2.86,6.24,4.43,13.68,4.73,22.33,0,1.18-.44,2.24-1.32,3.19-.88.96-1.91,1.43-3.08,1.43h-89.76l-1.32-8.36h88.66l-2.2,1.98v-3.96c-.74-7.77-3.19-14.3-7.37-19.58-4.18-5.28-9.21-9.28-15.07-11.99-5.87-2.71-11.96-4.07-18.26-4.07-4.4,0-9.02.99-13.86,2.97-4.84,1.98-9.32,4.99-13.42,9.02-4.11,4.04-7.45,9.13-10.01,15.29-2.57,6.16-3.85,13.35-3.85,21.56,0,8.95,1.79,17.16,5.39,24.64,3.59,7.48,8.94,13.5,16.06,18.04,7.11,4.55,15.88,6.82,26.29,6.82,4.98,0,9.68-.84,14.08-2.53,4.4-1.69,8.36-3.92,11.88-6.71,3.52-2.78,6.38-5.79,8.58-9.02,1.17-1.32,2.42-1.98,3.74-1.98,1.02,0,1.9.41,2.64,1.21.73.81,1.1,1.72,1.1,2.75s-.3,1.91-.88,2.64c-4.55,5.87-10.38,11-17.49,15.4-7.12,4.4-15,6.6-23.65,6.6Z" />
                <path className="cls-2 stroke-[0px] fill-[#939598]" d="M1270.48,162.8c-1.91,0-3.38-.66-4.4-1.98-1.03-1.32-1.54-2.93-1.54-4.84v-5.06c0-2.05.51-3.7,1.54-4.95,1.02-1.24,2.49-1.87,4.4-1.87h.88c2.05,0,3.55.63,4.51,1.87.95,1.25,1.43,2.9,1.43,4.95v5.06c0,1.91-.48,3.52-1.43,4.84-.96,1.32-2.46,1.98-4.51,1.98h-.88Z" />
                <path className="cls-2 stroke-[0px] fill-[#939598]" d="M1301.72,50.6c1.46,0,2.64.66,3.52,1.98l79.42,104.06c.58.74.88,1.62.88,2.64,0,1.18-.41,2.2-1.21,3.08-.81.88-1.8,1.32-2.97,1.32-1.32,0-2.57-.66-3.74-1.98l-79.64-103.84c-.59-.73-.88-1.61-.88-2.64,0-1.32.47-2.42,1.43-3.3.95-.88,2.01-1.32,3.19-1.32ZM1301.72,163.68c-1.03,0-1.98-.33-2.86-.99-.88-.66-1.32-1.72-1.32-3.19,0-1.02.29-1.91.88-2.64l38.5-49.94,5.28,6.82-36.96,48.18c-.88,1.17-2.06,1.76-3.52,1.76ZM1381.36,50.6c1.46,0,2.53.37,3.19,1.1.66.74.99,1.62.99,2.64,0,.44-.11.92-.33,1.43-.22.52-.48.99-.77,1.43l-38.5,51.48-4.62-7.7,36.3-48.4c1.17-1.32,2.42-1.98,3.74-1.98Z" />
                <path className="cls-2 stroke-[0px] fill-[#939598]" d="M1495.54,49.5c1.32,0,2.38.44,3.19,1.32.8.88,1.21,1.91,1.21,3.08v98.12c0,11.29-2.28,21.04-6.82,29.26-4.55,8.21-10.71,14.52-18.48,18.92-7.78,4.4-16.65,6.6-26.62,6.6-6.75,0-12.8-.81-18.15-2.42-5.36-1.62-9.72-3.6-13.09-5.94-1.03-.74-1.83-1.62-2.42-2.64-.59-1.03-.59-2.13,0-3.3.58-1.18,1.43-1.98,2.53-2.42,1.1-.44,2.16-.29,3.19.44,2.49,1.46,6.27,3.22,11.33,5.28,5.06,2.05,10.74,3.08,17.05,3.08,8.5,0,15.95-1.98,22.33-5.94,6.38-3.96,11.36-9.46,14.96-16.5,3.59-7.04,5.39-15.18,5.39-24.42v-16.28l.44,5.5c-2.05,4.4-5.17,8.4-9.35,11.99-4.18,3.6-8.88,6.46-14.08,8.58-5.21,2.12-10.6,3.19-16.17,3.19-9.1,0-16.54-1.8-22.33-5.39-5.8-3.59-10.05-8.54-12.76-14.85-2.72-6.3-4.07-13.71-4.07-22.22V53.9c0-1.17.4-2.2,1.21-3.08.8-.88,1.87-1.32,3.19-1.32s2.38.44,3.19,1.32c.8.88,1.21,1.91,1.21,3.08v68.64c0,10.42,2.31,18.7,6.93,24.86s12.43,9.24,23.43,9.24c6.6,0,12.87-1.65,18.81-4.95,5.94-3.3,10.81-7.59,14.63-12.87,3.81-5.28,5.72-10.7,5.72-16.28V53.9c0-1.17.4-2.2,1.21-3.08.8-.88,1.87-1.32,3.19-1.32Z" />
                <path className="cls-2 stroke-[0px] fill-[#939598]" d="M1605.54,154.44c1.17,0,2.2.44,3.08,1.32s1.32,1.83,1.32,2.86c0,1.18-.44,2.17-1.32,2.97-.88.81-1.91,1.21-3.08,1.21h-71.72c-1.47,0-2.61-.55-3.41-1.65-.81-1.1-1.21-2.01-1.21-2.75,0-.58.11-1.1.33-1.54.22-.44.47-.88.77-1.32l70.84-99.44,1.1,1.76h-61.82c-1.18,0-2.2-.44-3.08-1.32-.88-.88-1.32-1.83-1.32-2.86,0-1.17.44-2.16,1.32-2.97.88-.8,1.9-1.21,3.08-1.21h67.32c1.17,0,2.16.44,2.97,1.32.8.88,1.28,1.91,1.43,3.08,0,.59-.11,1.14-.33,1.65-.22.52-.48.99-.77,1.43l-70.4,98.56-3.3-1.1h68.2Z" />
              </svg>
            </div>
          </div>

        </div>
      </div>
      <div className="flex menu menu_right bg-purple-100">
        {/* <NetBg /> */}
        <div className="flex aspect-video p-[5rem]">
          <div className="flex h-full flex-1 mr-[3.5rem]">
            {/* <PremiumProduct /> */}
            {solderableKits.map(section => <MenuCard sections={section} moveToOos={moveToOos} type='SolderableKits' />)}
            {/* <div
              className="absolute w-[100px] h-[100px] bg-rose-500 opacity-1 hover:opacity-100	 "
              onClick={reset}
            >
              RESET MENUE
            </div> */}
          </div>
          <div className="flex flex-col w-1/2 h-full">
            <div className="flex h-1/2 justify-between">
              <div className="flex slideshow aspect-square w-1/2 max-w-[47%]">
                <ImageSlideShow small images={subTopSlideshowImages} />
              </div>
              {/* <div className="w-[3rem]"></div> */}
              <div className="test menu flex-1 h-full aspect-square w-1/2 max-w-[47%]">
                {switchList.map(section => <MenuCard sections={section} moveToOos={moveToOos} type='Switches' />)}
              </div>
            </div>
            <div className="h-[3.25rem]"></div>
            <div className="flex h-1/2 justify-between">
              <div className="test menu flex-1 h-full aspect-square w-1/2 max-w-[47%]">
                {keycapList.map(section => <MenuCard sections={section} moveToOos={moveToOos} type='Keycaps' />)}
              </div>
              {/* <div className="w-[3rem]"></div> */}
              <div className="flex slideshow aspect-square w-1/2 max-w-[47%]">
                <ImageSlideShow small images={sub} />
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
