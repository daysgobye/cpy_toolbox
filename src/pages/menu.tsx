import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import NetBg from "../components/menu/backgrounds/nets";
import { MenuSection } from "../logic/types";
import MenuSectionView from "../components/menu/menuSection";
import { useState } from "react";
import MenuCard from "../components/menu/menuCard";
import ImageSlideShow from "../components/menu/imageSlideShow";

const defaultData: MenuSection[][] = [
    [
        {
            title: "DIY Soldering Kits",
            price: 0,
            description: "",
            image: "lily58",
            items: [{
                title: "lily58",
                description: "58 key split keyboard kit",
                image: "lily58",
                inStock: true,
                price: 180
            }]
        },
        {
            title: "Mx Switches",
            price: 5.5,
            description: "",
            image: "mxSwitch",
            items: [
                {
                    title: "Gattron Yellow",
                    description: "55g linear switch",
                    image: "mxSwitch",
                    inStock: true,

                },
                {
                    title: "Gattron Blue",
                    description: "55g clicky switch",
                    image: "mxSwitch",
                    inStock: true,

                },
                {
                    title: "Gattron Brown",
                    description: "55g tactile switch",
                    image: "mxSwitch",
                    inStock: true,

                }
            ]
        }
    ],
    [
        {
            title: "Custom Keyboard",
            price: 0,
            description: "",
            image: "lily58",
            items: [{
                title: "UniCorne",
                description: "42 key split keyboard",
                image: "lily58",
                inStock: true,
                price: 180
            }]
        },
        {
            title: "LP Switches",
            price: 8,
            description: "",
            image: "mxSwitch",
            items: [
                {
                    title: "Kailh Choc Red",
                    description: "55g linear switch",
                    image: "mxSwitch",
                    inStock: true,

                },
                {
                    title: "Kailh Choc White",
                    description: "55g clicky switch",
                    image: "mxSwitch",
                    inStock: true,

                },
                {
                    title: "Kailh Choc Brown",
                    description: "55g tactile switch",
                    image: "mxSwitch",
                    inStock: true,

                },
                {
                    title: "Kailh Choc Purps",
                    description: "25g linear switch",
                    image: "mxSwitch",
                    inStock: true,

                }
            ]
        }
    ]
]

export default function MenuPage() {
    const [menu, setMenu] = useState(defaultData)

    React.useEffect(() => {
        const currentData = localStorage.getItem("menu")
        if (currentData) {
            setMenu(JSON.parse(currentData))
        } else {
            localStorage.setItem("menu", JSON.stringify(menu))
        }
    }, [])



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
        <div className="menu">

            <NetBg />
            <div className="flex items-center justify-center h-screen ">
                <ImageSlideShow />
                {menu.map(section => <MenuCard sections={section} moveToOos={moveToOos} />)}

            </div>
            <div
                className="absolute w-[100px] h-[100px] bg-rose-500 opacity-0 hover:opacity-100	 "
                onClick={reset}
            >
                RESET MENUE
            </div>
        </div>
    );
}
export const Head: HeadFC = () => <title>DC-32 menu</title>;
