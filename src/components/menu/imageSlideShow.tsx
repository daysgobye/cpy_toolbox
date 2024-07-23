import * as React from "react";


type Props = {
  small?: boolean;
  images: { title: string, src: string }[]
}

// const images = [
//     { title: "Crab Broom 30% Split", src: "https://boardsourcev2.nyc3.digitaloceanspaces.com/ferris_sweep_main_1_1-1709737463653.jpg", },
//     { title: "Lily58 Kit 60% Split", src: "https://boardsourcev2.nyc3.digitaloceanspaces.com/lily_1_1-1687460016543.jpg", },
//     { title: "Unicorn LP 40% Split ", src: "https://boardsourcev2.nyc3.digitaloceanspaces.com/unicorne_lp_red_plain_main_1_1-1697651735052.jpg", },
//     { title: "Unicorn MX 40% Split ", src: "https://boardsourcev2.nyc3.digitaloceanspaces.com/unicorne_mx_magic_girl_yellow_main_1_1-1697650993659.jpg", },
//     { title: "LuLu 60% Split", src: "https://v2serverstorage.s3.us-west-1.amazonaws.com/lulu_main_1_1%20%281%29.jpg", },
//     { title: "Blok RP2040", src: "https://boardsourcev2.nyc3.digitaloceanspaces.com/blok_components_1_1-1694724454632.png", },
//     { title: "Equals 48 40% Ortho", src: "https://boardsourcev2.nyc3.digitaloceanspaces.com/equals_48_cyber_white_1_thumbnail_main-1700097763822.jpg", },
// ]


export default function ImageSlideShow({ small, images }: Props) {
  const [image, setImage] = React.useState(images[0]),
    [myinterval, setMyinterval] = React.useState(false),
    [classes, setClasses] = React.useState("opacity-100")

  const getRandomImage = () => {
    console.log("random")
    const randomIndex = Math.floor(Math.random() * images.length)
    setImage(images[randomIndex])
  }
  const loop = () => {
    setTimeout(() => {
      setClasses("opacity-0")
    }, 9000);
    setTimeout(() => {
      getRandomImage()
      setClasses("opacity-100")

      loop()
    }, 10000);
  }
  React.useEffect(
    () => {
      if (myinterval) {
      } else {
        setMyinterval(true)
        loop()
      }
    }
  )
  return (
    <div className={`relative ${classes} transition-all duration-1000 ease-in-out rounded-[1rem] overflow-hidden bg-red-700`}>
      <img
        src={image.src}
        alt="keyboard"
        className={`object-cover w-full h-full`}
      />
      <div className={`absolute bottom-0 left-0 right-0 rounded-[.4rem] backdrop-blur-lg mx-[2rem] mb-[2rem] px-[1rem] bg-[rgba(0,0,0,0.4)] ${small ? 'py-[.4rem]' : 'py-[1.5rem]'}`}>
        <h3 className={`font-[500] text-white ml-2 leading-[4rem] py-1 mt-[-.3rem] ${small ? 'text-[2.6rem]' : 'text-[4.5rem]'}`}>{image.title}</h3>
      </div>
      {/* <div className="absolute bottom-0 left-0 w-full h-[75px] bg-[rgba(0,0,0,0.5)] ">
        <h3 className=" w-full  text-white  text-xl font-bold  p-2">
          {image.title}
        </h3>
      </div> */}
    </div>
  );
}
