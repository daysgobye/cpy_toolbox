import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { MenuItem, SlideShowImage } from "../../logic/types";
import { getImage } from "./images";


type Props = {
  item: MenuItem
  moveToOos: (title: string) => void
  type: 'SolderableKits' | 'PremiumProducts' | 'Keycaps' | 'Switches' | 'Accessories' | 'Controllers'
  slideShowImage: SlideShowImage

}
export default function MenuItemView({ item, moveToOos, type, slideShowImage }: Props) {
  //@ts-ignore
  const renderPrice = () => {
    if (item.price !== undefined) {
      return (<>
        {" "}{item.price}
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

  const renderImageBeingShow = () => {
    return (
      <div className={`w-[10px] h-[10px] bg-success rounded-full  transition-all duration-[2000ms] ease-in-out ${slideShowImage.productTitle === item.title ? "opacity-100" : "opacity-0"}`}></div>
    )

  }
  return (
    <div className="flex flex-col relative"
      onClick={() => moveToOos(item.title)}
    >
      <div className={`flex first:mt-[-1.2rem] ${type === 'SolderableKits' ? 'first:mt-[-.75rem]' : ''}`}>
        <div className={`flex flex-col ${type !== 'Switches' && type !== 'Keycaps' ? 'flex-1' : ''}`}>
          <span className="flex">
            <h2 className={`font-[500] text-[3.25rem] mb-0 ${type === 'SolderableKits' ? 'text-[2.1rem] font-[500] mb-[-.6rem]' : ''} ${type === 'Switches' || type === 'Keycaps' ? 'text-[1.8rem] font-[400] tracking-[-.05rem]' : ''} ${item.price === 1000 ? 'text-[2.1rem] font-[600] mt-[.75rem]' : ''} ${item.price === 1000 && type === 'Switches' ? '' : ''}`} >{item.title}</h2> {renderImageBeingShow()}
          </span>
          <div className="bottom flex">
            <h4 className={`text-[2.1rem] leading-[2.1rem] ${type === 'SolderableKits' ? 'text-[1.5rem] font-[400]' : ''} ${type === 'Switches' || type === 'Keycaps' ? 'hidden' : ''}`}>{item.description}</h4>
            <div
              className={`line flex-1 border-b-[.18rem] border-indigo-500 border-dotted mb-[.15rem] ${type === 'SolderableKits' ? 'border-dotted mb-[.5rem] mx-[.5rem]' : ''} ${type === 'Switches' || type === 'Keycaps' ? 'hidden' : ''}`}
            />
          </div>
        </div>
        <p className={`self-end mb-[.7rem] ml-[.4rem] text-[1.3rem] ${type === 'Switches' ? '' : 'hidden'} ${item.price === 1000 ? 'hidden' : ''}`}>{item.description}</p>
        <div
          className={`border-b-[.18rem] border-indigo-500 border-dotted flex-1 mb-[1.1rem] mx-[.35rem] ${type !== 'Switches' && type !== 'Keycaps' ? 'hidden' : ''} ${item.price === 1000 ? 'hidden' : ''}`}
        />
        <div
          className="flex items-end
         "
        >
          {/* <p className={`${type !== 'Switches' ? 'hidden' : ''}`}>testing</p> */}
          <h4 className={`font-[300] text-[3.5rem] leading-[3.2rem] ${type === 'SolderableKits' ? 'text-[2.5rem] tracking-[-.05rem]' : ''} ${type === 'Switches' || type === 'Keycaps' ? 'text-[1.8rem] leading-[2.8rem]' : ''} ${item.price === 1000 ? 'hidden' : ''}`}>
            <span className={`${type === 'SolderableKits' ? 'mr-[-.35rem]' : ''}`}>$</span>{renderPrice()}
          </h4>
          {item.inStock === false && renderSoldOut()}
        </div>
      </div>
      {/* <img
                src={getImage(item.image)}
                alt={item.image}
                className=""
                width="75px"
                height="75px"
            /> */}
    </div >
  );
}
