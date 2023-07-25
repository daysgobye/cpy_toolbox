import { HeadFC, Link, PageProps } from "gatsby";
import React, { useEffect, useState } from 'react';
// import { Stage, Layer, Rect, Text, Circle } from 'react-konva';
import { CartStockItem } from "../logic/pos/shoppingCart";
const windowGlobal = typeof window !== 'undefined' && window;


const { Stage, Layer, Rect, Text, Circle } = windowGlobal ? require('react-konva') : { Stage: null, Layer: null, Rect: null, Text: null, Circle: null };
export const dataURLtoFile = (dataurl: string, filename: string) => {
    var arr = dataurl.split(","),
        //@ts-ignore
        mimeType = arr[0].match(/:(.*?);/)[1],
        decodedData = atob(arr[1]),
        lengthOfDecodedData = decodedData.length,
        u8array = new Uint8Array(lengthOfDecodedData);
    while (lengthOfDecodedData--) {
        u8array[lengthOfDecodedData] = decodedData.charCodeAt(lengthOfDecodedData);
    }
    return new File([u8array], filename, { type: mimeType });
};
const shareFile = (file: any, title: string, text: string) => {
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator
            .share({
                files: [file],
                title,
                text
            })
            .then(() => console.log("Share was successful."))
            .catch((error) => console.log("Sharing failed", error));
    } else {
        console.log(`Your system doesn't support sharing files.`);
    }
};

const Reciept = ({ items, total }: { items: CartStockItem[], total: number }) => {
    const stageRef = React.useRef(null);
    const handleExport = () => {
        //@ts-ignore
        if (stageRef.current && stageRef.current.toDataURL) {
            //@ts-ignore
            const uri = stageRef.current.toImage({
                callback(img: any) {
                    setImg(img.src)
                }
            });


            return uri


        }

    };
    const sendToPrint = () => {
        //@ts-ignore
        if (stageRef.current && stageRef.current.toDataURL) {
            //@ts-ignore
            const uri = stageRef.current.toDataURL();
            const file = dataURLtoFile(uri, "boardsource receipt.png");
            shareFile(file, "Receipt", "boardsource  receipt");
        }
    }
    const [img, setImg] = useState(null)
    const getY = (i: number) => {
        return i * 32 + 90
    }
    const height = items.length * 32 + 180


    useEffect(() => {
        setTimeout(() => {
            handleExport()

            sendToPrint()
        }, 1000)

    }, [])
    const getTax = () => {
        return (total * 8.3) / 100
    }

    return (
        <div className="flex flex-col-reverse items-center	">
            <Stage width={200} height={height} ref={stageRef}>
                <Layer >
                    <Rect
                        x={0}
                        y={0}
                        width={200}
                        height={height}
                        fill={"white"}
                    />
                    <Circle
                        x={25}
                        y={25}
                        radius={18}
                        strokeWidth={3}
                        stroke={"black"}

                    />
                    <Circle
                        x={25}
                        y={25}
                        radius={3}
                        stroke={"black"}
                        fill="black"
                    />
                    <Text x={45} y={15} fontSize={25} text={`Boardsource`} />

                    <Text x={2} y={45} fontSize={20} text={`Item`} />
                    <Text x={112} y={45} fontSize={20} text={`QTY`} />
                    <Text x={155} y={45} fontSize={20} text={`Price`} />
                    <Rect
                        x={0}
                        y={70}
                        width={200}
                        height={2}
                        fill={"black"}
                    />

                </Layer>
                {items.map((item, i) => (
                    <Layer key={i}>
                        <Text x={2} y={getY(i)} fontSize={18} text={`${item.name}`} />
                        <Text x={128} y={getY(i)} fontSize={18} text={`${item.quantity}`} />
                        <Text x={150} y={getY(i)} fontSize={18} text={`$${item.price}`} />
                        {/* <Text x={2} y={getY(i) + 15} fontSize={10} text={item.buildGuide} /> */}
                    </Layer>
                ))}
                <Layer>
                    <Rect
                        x={0}
                        y={height - 80}
                        width={200}
                        height={2}
                        fill={"black"}
                    />
                    <Text x={2} y={height - 75} fontSize={20} text={`SubTotal`} />
                    <Text x={140} y={height - 75} fontSize={20} text={`$${total}`} />
                    <Text x={2} y={height - 52} fontSize={20} text={`Tax`} />
                    <Text x={140} y={height - 52} fontSize={20} text={`$${getTax()}`} />
                    <Text x={2} y={height - 30} fontSize={20} text={`Total`} />
                    <Text x={140} y={height - 30} fontSize={20} text={`$${Math.floor(getTax() + total)}`} />
                </Layer>

            </Stage>
            {/* {img && <img src={img} alt="" />} */}
            <button
                className="px-2 py-1 bg-blue-500 text-white rounded  mb-2"
                onClick={sendToPrint}
            >
                sendToPrint
            </button>

        </div>
    )
}
export default function print(props: any) {
    //@ts-ignore
    const items: CartStockItem[] | undefined = props.location && props.location.state && props.location.state.items ? { ...props.location.state.items } as unknown as CartStockItem[] : undefined
    const total: number | undefined = props.location && props.location.state && props.location.state.total ? props.location.state.total : undefined
    return (
        <div className="flex flex-col">
            <div className="flex justify-around mb-10">
                <h1 className="text-xl">
                    Reciept
                </h1>
                <Link to="/pos"
                    className="px-2 py-1 bg-green-500 text-white rounded"
                >
                    back to pos
                </Link>
            </div>

            <div className="pattern-zigzag-3d pattern-blue-500 pattern-bg-white 
  pattern-size-6 pattern-opacity-20  min-h-full">

                {items && total ? <Reciept items={Object.values(items)} total={total} /> : <div>no items</div>}
            </div>

        </div>
    );
}
export const Head: HeadFC = () => <title>cpy toolbox</title>;
