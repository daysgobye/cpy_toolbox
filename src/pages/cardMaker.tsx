import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { nanoid } from "nanoid"
type CardInput = {
    id: string
    name: string
    body: string
    atk: string
    hp: string
    count: number
}
export default function CardMaker() {
    const [cards, setCards] = React.useState<Record<string, CardInput>>({}),
        [editId, setEditid] = React.useState<string | undefined>()

    const edit = (e: any) => {
        console.log('edit')
        if (!editId) {
            console.log('no edit id')
            return
        }
        let tempCards = { ...cards }
        let currentCard = cards[editId]
        if (currentCard) {
            //@ts-ignore
            currentCard[e.target.name] = e.target.value
            tempCards[editId] = currentCard
            setCards(tempCards)
        } else {
            console.log('no current card')

        }
    }
    return (
        <div className="">
            <div className="print-hide">

                <button className="btn btn-accent" onClick={() => {
                    let tempCards = { ...cards }
                    const newCard = {
                        id: nanoid(10),
                        name: `card-${Object.values(tempCards).length + 1}`,
                        body: "cool action bro",
                        atk: "0",
                        hp: "0",
                        count: 1
                    }
                    tempCards[newCard.id] = newCard
                    setCards(tempCards)
                    setEditid(newCard.id)
                }}>new card</button>
                <div className="flex mt-2">
                    {Object.values(cards).map(card => (
                        <button className="border border-black m-4"
                            onClick={() => setEditid(card.id)}
                            key={card.id}
                        >
                            {card.name}
                            <br />
                            {card.body}
                            <br />
                            <p>atk:{card.atk}, hp:{card.hp}</p>
                            <br />
                            Render Count:{card.count}

                        </button>
                    ))}
                </div>
                {editId && (

                    <div className="flex flex-col mt-2 border border-black p-4">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Render Count:</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" name='count' onChange={edit} value={cards[editId].count} />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">card Name:</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" name='name' onChange={edit} value={cards[editId].name} />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">card Body:</span>
                            </div>
                            <textarea className="textarea textarea-bordered h-24" name='body' onChange={edit} value={cards[editId].body}></textarea>

                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">card HP:</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" name='hp' onChange={edit} value={cards[editId].hp} />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">card ATK:</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" name='atk' onChange={edit} value={cards[editId].atk} />
                        </label>



                    </div>
                )}

            </div>
            <div className="flex mt-2">
                {Object.values(cards).map(card => (
                    <div className="row" key={card.id}>
                        {[...Array.from({ length: card.count }, () => card)].map((c, i) => (

                            <div className="border border-black p-4 m-4 w-[200px] break-inside-avoid	"
                                key={`${c.id}-${i}`}
                            >
                                <p className="text-xl">

                                    {c.name}
                                </p>
                                <hr className="border-gray-500" />

                                <p className="min-h-[200px]" dangerouslySetInnerHTML={{ __html: c.body }}>
                                </p>
                                <hr className="border-gray-500" />

                                <div className="flex justify-between	">

                                    <p>ATK:{c.atk} </p>
                                    <p>{c.hp}:HP</p>

                                </div>


                            </div>
                        ))}
                    </div>
                ))}
            </div>

        </div>
    )
}


export const Head: HeadFC = () => <title>cpy toolbox</title>
