import * as React from "react";
import { SlideShowImage } from "../../logic/types";

function useStateCallback<T>(
  initialState: T
): [T, (state: T, cb?: (state: T) => void) => void] {
  const [state, setState] = React.useState(initialState);
  const cbRef = React.useRef<((state: T) => void) | undefined>(undefined); // init mutable ref container for callbacks

  const setStateCallback = React.useCallback((state: T, cb?: (state: T) => void) => {
    cbRef.current = cb; // store current, passed callback in ref
    setState(state);
  }, []); // keep object reference stable, exactly like `useState`

  React.useEffect(() => {
    // cb.current is `undefined` on initial render,
    // so we only invoke callback on state *updates*
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = undefined; // reset callback after execution
    }
  }, [state]);

  return [state, setStateCallback];
}

const getRandomFromArray = (imageList: SlideShowImage[]) => {
  const randomIndex = Math.floor(Math.random() * imageList.length - 1)
  const newImage = imageList[randomIndex]
  if (newImage && newImage.src) {
    return newImage
  } else {
    return getRandomFromArray(imageList)
  }
}


type Props = {
  small?: boolean;
  images: SlideShowImage[]
  setRenderedImage: (image: SlideShowImage) => void
}



export default function ImageSlideShow({ small, images, setRenderedImage }: Props) {
  const [image, setImage] = useStateCallback(images[0]),
    [myinterval, setMyinterval] = React.useState(false),
    [classes, setClasses] = React.useState("opacity-100")
  // ban list is not state because its not used for rendering its only used for logic
  let banList = [images[0].src]

  const getRandomImage = () => {
    // clone the ban list so we are not modfiing the main var 
    let tempBanList = [...banList]
    // filter out all images we have used from our image array
    const imageList = [...images].filter(image => !tempBanList.includes(image.src))
    // get a random image 
    const newImage = getRandomFromArray(imageList)
    // push the new image to the ban list so it wont come upagain
    tempBanList.push(newImage.src)


    if (tempBanList.length > 3) {
      // if we have more then 3 images remove the oldest one so it can pop up again
      tempBanList.shift()
    }
    // save the work we have done to the ban list
    banList = tempBanList
    return newImage
  }
  const loop = () => {
    setTimeout(() => {
      setClasses("opacity-0")
    }, 9000);
    setTimeout(() => {
      const newImage = getRandomImage()

      requestAnimationFrame(() => {
        setImage(newImage, () => {
          setRenderedImage(newImage)
          setTimeout(() => {
            setClasses("opacity-100")
            loop()
          }, 400)

        })

      })
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
