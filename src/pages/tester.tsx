import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import { Howl, Howler } from 'howler';

type Key = {
    label: string | JSX.Element,
    w: number,
    h?: number,
    x: number,
    y: number,
    hit?: boolean
    code: number
}
const defaultKeys: Key[] = [
    {
        "label": (
            <img src="https://www.boardsource.xyz/bs_logo.svg" alt="Boardsource logo" />
        ),
        "w": 4,
        "h": 1,
        "x": 18.5,
        "y": 0,
        code: 1000
    },
    {
        "label": "Esc",
        "w": 1,
        "h": 1,
        "x": 0,
        "y": 0,
        code: 27

    },
    {
        "label": "F1",
        "w": 1,
        "h": 1,
        "x": 2,
        "y": 0,
        code: 112
    },
    {
        "label": "F2",
        "w": 1,
        "h": 1,
        "x": 3,
        "y": 0,
        code: 113
    },
    {
        "label": "F3",
        "w": 1,
        "h": 1,
        "x": 4,
        "y": 0,
        code: 114
    },
    {
        "label": "F4",
        "w": 1,
        "h": 1,
        "x": 5,
        "y": 0,
        code: 115
    },
    {
        "label": "F5",
        "w": 1,
        "h": 1,
        "x": 6.5,
        "y": 0,
        code: 116
    },
    {
        "label": "F6",
        "w": 1,
        "h": 1,
        "x": 7.5,
        "y": 0,
        code: 117
    },
    {
        "label": "F7",
        "w": 1,
        "h": 1,
        "x": 8.5,
        "y": 0,
        code: 118
    },
    {
        "label": "F8",
        "w": 1,
        "h": 1,
        "x": 9.5,
        "y": 0,
        code: 119
    },
    {
        "label": "F9",
        "w": 1,
        "h": 1,
        "x": 11,
        "y": 0,
        code: 120
    },
    {
        "label": "F10",
        "w": 1,
        "h": 1,
        "x": 12,
        "y": 0,
        code: 121
    },
    {
        "label": "F11",
        "w": 1,
        "h": 1,
        "x": 13,
        "y": 0,
        code: 122
    },
    {
        "label": "F12",
        "w": 1,
        "h": 1,
        "x": 14,
        "y": 0,
        code: 123
    },
    {
        "label": "PrtSc",
        "w": 1,
        "h": 1,
        "x": 15.25,
        "y": 0,
        code: 44
    },
    {
        "label": "Scroll",
        "w": 1,
        "h": 1,
        "x": 16.25,
        "y": 0,
        code: 145
    },
    {
        "label": "Pause",
        "w": 1,
        "h": 1,
        "x": 17.25,
        "y": 0,
        code: 19
    },
    {
        "label": "~\n`",
        "w": 1,
        "h": 1,
        "x": 0,
        "y": 1.5,
        code: 192
    },
    {
        "label": "!\n1",
        "w": 1,
        "h": 1,
        "x": 1,
        "y": 1.5,
        code: 49
    },
    {
        "label": "@\n2",
        "w": 1,
        "h": 1,
        "x": 2,
        "y": 1.5,
        code: 50
    },
    {
        "label": "#\n3",
        "w": 1,
        "h": 1,
        "x": 3,
        "y": 1.5,
        code: 51
    },
    {
        "label": "$\n4",
        "w": 1,
        "h": 1,
        "x": 4,
        "y": 1.5,
        code: 52
    },
    {
        "label": "%\n5",
        "w": 1,
        "h": 1,
        "x": 5,
        "y": 1.5,
        code: 53
    },
    {
        "label": "^\n6",
        "w": 1,
        "h": 1,
        "x": 6,
        "y": 1.5,
        code: 54
    },
    {
        "label": "&\n7",
        "w": 1,
        "h": 1,
        "x": 7,
        "y": 1.5,
        code: 55
    },
    {
        "label": "*\n8",
        "w": 1,
        "h": 1,
        "x": 8,
        "y": 1.5,
        code: 56
    },
    {
        "label": "(\n9",
        "w": 1,
        "h": 1,
        "x": 9,
        "y": 1.5,
        code: 57
    },
    {
        "label": ")\n0",
        "w": 1,
        "h": 1,
        "x": 10,
        "y": 1.5,
        code: 48
    },
    {
        "label": "_\n-",
        "w": 1,
        "h": 1,
        "x": 11,
        "y": 1.5,
        code: 189
    },
    {
        "label": "+\n=",
        "w": 1,
        "h": 1,
        "x": 12,
        "y": 1.5,
        code: 187
    },
    {
        "label": "Backspace",
        "h": 1,
        "x": 13,
        "y": 1.5,
        "w": 2,
        code: 8
    },
    {
        "label": "Insert",
        "w": 1,
        "h": 1,
        "x": 15.25,
        "y": 1.5,
        code: 45
    },
    {
        "label": "Home",
        "w": 1,
        "h": 1,
        "x": 16.25,
        "y": 1.5,
        code: 36
    },
    {
        "label": "PgUp",
        "w": 1,
        "h": 1,
        "x": 17.25,
        "y": 1.5,
        code: 33
    },
    {
        "label": "Num",
        "w": 1,
        "h": 1,
        "x": 18.5,
        "y": 1.5,
        code: 12
    },
    {
        "label": "/",
        "w": 1,
        "h": 1,
        "x": 19.5,
        "y": 1.5,
        code: 191
    },
    {
        "label": "*",
        "w": 1,
        "h": 1,
        "x": 20.5,
        "y": 1.5,
        code: 106
    },
    {
        "label": "-",
        "w": 1,
        "h": 1,
        "x": 21.5,
        "y": 1.5,
        code: 189
    },
    {
        "label": "Tab",
        "h": 1,
        "x": 0,
        "y": 2.5,
        "w": 1.5,
        code: 9
    },
    {
        "label": "Q",
        "w": 1,
        "h": 1,
        "x": 1.5,
        "y": 2.5,
        code: 81
    },
    {
        "label": "W",
        "w": 1,
        "h": 1,
        "x": 2.5,
        "y": 2.5,
        code: 87
    },
    {
        "label": "E",
        "w": 1,
        "h": 1,
        "x": 3.5,
        "y": 2.5,
        code: 69
    },
    {
        "label": "R",
        "w": 1,
        "h": 1,
        "x": 4.5,
        "y": 2.5,
        code: 82
    },
    {
        "label": "T",
        "w": 1,
        "h": 1,
        "x": 5.5,
        "y": 2.5,
        code: 84
    },
    {
        "label": "Y",
        "w": 1,
        "h": 1,
        "x": 6.5,
        "y": 2.5,
        code: 89
    },
    {
        "label": "U",
        "w": 1,
        "h": 1,
        "x": 7.5,
        "y": 2.5,
        code: 85
    },
    {
        "label": "I",
        "w": 1,
        "h": 1,
        "x": 8.5,
        "y": 2.5,
        code: 73
    },
    {
        "label": "O",
        "w": 1,
        "h": 1,
        "x": 9.5,
        "y": 2.5,
        code: 79
    },
    {
        "label": "P",
        "w": 1,
        "h": 1,
        "x": 10.5,
        "y": 2.5,
        code: 80
    },
    {
        "label": "{",
        "w": 1,
        "h": 1,
        "x": 11.5,
        "y": 2.5,
        code: 219
    },
    {
        "label": "}",
        "w": 1,
        "h": 1,
        "x": 12.5,
        "y": 2.5,
        code: 221
    },
    {
        "label": "|",
        "h": 1,
        "x": 13.5,
        "y": 2.5,
        "w": 1.5,
        code: 220
    },
    {
        "label": "Delete",
        "w": 1,
        "h": 1,
        "x": 15.25,
        "y": 2.5,
        code: 46
    },
    {
        "label": "End",
        "w": 1,
        "h": 1,
        "x": 16.25,
        "y": 2.5,
        code: 35
    },
    {
        "label": "PgDn",
        "w": 1,
        "h": 1,
        "x": 17.25,
        "y": 2.5,
        code: 34
    },
    {
        "label": "7",
        "w": 1,
        "h": 1,
        "x": 18.5,
        "y": 2.5,
        code: 55
    },
    {
        "label": "8",
        "w": 1,
        "h": 1,
        "x": 19.5,
        "y": 2.5,
        code: 56
    },
    {
        "label": "9",
        "w": 1,
        "h": 1,
        "x": 20.5,
        "y": 2.5,
        code: 57
    },
    {
        "label": "+",
        "w": 1,
        "x": 21.5,
        "y": 2.5,
        "h": 2,
        code: 187
    },
    {
        "label": "Caps",
        "h": 1,
        "x": 0,
        "y": 3.5,
        "w": 1.75,
        code: 20
    },
    {
        "label": "A",
        "w": 1,
        "h": 1,
        "x": 1.75,
        "y": 3.5,
        code: 65
    },
    {
        "label": "S",
        "w": 1,
        "h": 1,
        "x": 2.75,
        "y": 3.5,
        code: 83
    },
    {
        "label": "D",
        "w": 1,
        "h": 1,
        "x": 3.75,
        "y": 3.5,
        code: 68
    },
    {
        "label": "F",
        "w": 1,
        "h": 1,
        "x": 4.75,
        "y": 3.5,
        code: 70
    },
    {
        "label": "G",
        "w": 1,
        "h": 1,
        "x": 5.75,
        "y": 3.5,
        code: 71
    },
    {
        "label": "H",
        "w": 1,
        "h": 1,
        "x": 6.75,
        "y": 3.5,
        code: 72
    },
    {
        "label": "J",
        "w": 1,
        "h": 1,
        "x": 7.75,
        "y": 3.5,
        code: 74
    },
    {
        "label": "K",
        "w": 1,
        "h": 1,
        "x": 8.75,
        "y": 3.5,
        code: 75
    },
    {
        "label": "L",
        "w": 1,
        "h": 1,
        "x": 9.75,
        "y": 3.5,
        code: 76
    },
    {
        "label": ":",
        "w": 1,
        "h": 1,
        "x": 10.75,
        "y": 3.5,
        code: 58
    },
    {
        "label": "\"",
        "w": 1,
        "h": 1,
        "x": 11.75,
        "y": 3.5,
        code: 222
    },
    {
        "label": "Enter",
        "h": 1,
        "x": 12.75,
        "y": 3.5,
        "w": 2.25,
        code: 13
    },
    {
        "label": "4",
        "w": 1,
        "h": 1,
        "x": 18.5,
        "y": 3.5,
        code: 52
    },
    {
        "label": "5",
        "w": 1,
        "h": 1,
        "x": 19.5,
        "y": 3.5,
        code: 53
    },
    {
        "label": "6",
        "w": 1,
        "h": 1,
        "x": 20.5,
        "y": 3.5,
        code: 54
    },
    {
        "label": "Shift",
        "h": 1,
        "x": 0,
        "y": 4.5,
        "w": 2.25,
        code: 16
    },
    {
        "label": "Z",
        "w": 1,
        "h": 1,
        "x": 2.25,
        "y": 4.5,
        code: 90
    },
    {
        "label": "X",
        "w": 1,
        "h": 1,
        "x": 3.25,
        "y": 4.5,
        code: 88
    },
    {
        "label": "C",
        "w": 1,
        "h": 1,
        "x": 4.25,
        "y": 4.5,
        code: 67
    },
    {
        "label": "V",
        "w": 1,
        "h": 1,
        "x": 5.25,
        "y": 4.5,
        code: 86
    },
    {
        "label": "B",
        "w": 1,
        "h": 1,
        "x": 6.25,
        "y": 4.5,
        code: 66
    },
    {
        "label": "N",
        "w": 1,
        "h": 1,
        "x": 7.25,
        "y": 4.5,
        code: 78
    },
    {
        "label": "M",
        "w": 1,
        "h": 1,
        "x": 8.25,
        "y": 4.5,
        code: 77
    },
    {
        "label": "<",
        "w": 1,
        "h": 1,
        "x": 9.25,
        "y": 4.5,
        code: 188
    },
    {
        "label": ">",
        "w": 1,
        "h": 1,
        "x": 10.25,
        "y": 4.5,
        code: 190
    },
    {
        "label": "?",
        "w": 1,
        "h": 1,
        "x": 11.25,
        "y": 4.5,
        code: 191
    },
    {
        "label": "Shift",
        "h": 1,
        "x": 12.25,
        "y": 4.5,
        "w": 2.75,
        code: 16
    },
    {
        "label": "\u2191",
        "w": 1,
        "h": 1,
        "x": 16.25,
        "y": 4.5,
        code: 38
    },
    {
        "label": "1",
        "w": 1,
        "h": 1,
        "x": 18.5,
        "y": 4.5,
        code: 49
    },
    {
        "label": "2",
        "w": 1,
        "h": 1,
        "x": 19.5,
        "y": 4.5,
        code: 50
    },
    {
        "label": "3",
        "w": 1,
        "h": 1,
        "x": 20.5,
        "y": 4.5,
        code: 51
    },
    {
        "label": "Enter",
        "w": 1,
        "x": 21.5,
        "y": 4.5,
        "h": 2,
        code: 13
    },
    {
        "label": "Ctrl",
        "h": 1,
        "x": 0,
        "y": 5.5,
        "w": 1.25,
        code: 17
    },
    {
        "label": "Win",
        "h": 1,
        "x": 1.25,
        "y": 5.5,
        "w": 1.25,
        code: 91
    },
    {
        "label": "Alt",
        "h": 1,
        "x": 2.5,
        "y": 5.5,
        "w": 1.25,
        code: 18
    },
    {
        "label": " ",
        "x": 3.75,
        "y": 5.5,
        "w": 6.25,
        code: 32,
    },
    {
        "label": "Alt",
        "h": 1,
        "x": 10,
        "y": 5.5,
        "w": 1.25,
        code: 18
    },
    {
        "label": "Win",
        "h": 1,
        "x": 11.25,
        "y": 5.5,
        "w": 1.25
    },
    {
        "label": "Menu",
        "h": 1,
        "x": 12.5,
        "y": 5.5,
        "w": 1.25,
        code: 93
    },
    {
        "label": "Ctrl",
        "h": 1,
        "x": 13.75,
        "y": 5.5,
        "w": 1.25,
        code: 17
    },
    {
        "label": "←",
        "w": 1,
        "h": 1,
        "x": 15.25,
        "y": 5.5,
        code: 37
    },
    {
        "label": "↓",
        "w": 1,
        "h": 1,
        "x": 16.25,
        "y": 5.5,
        code: 40
    },
    {
        "label": "→",
        "w": 1,
        "h": 1,
        "x": 17.25,
        "y": 5.5,
        code: 39
    },
    {
        "label": "0",
        "h": 1,
        "x": 18.5,
        "y": 5.5,
        "w": 2,
        code: 48
    },
    {
        "label": ".",
        "w": 1,
        "h": 1,
        "x": 20.5,
        "y": 5.5,
        code: 190
    }
]
export default function TesterPage() {
    var sound = new Howl({
        src: ['./button.ogg']
    });

    const [keys, setKeys] = React.useState(defaultKeys),
        [love, setLove] = React.useState<string[]>([])
    const makeStyleObj = (key: Key) => {
        const keyWidth = 50
        return {
            top: key.y * keyWidth,
            left: key.x * keyWidth,
            width: key.w * keyWidth,
            height: (key.h ? key.h : 1) * keyWidth,

        }
    }
    const loveSound = () => {
        var sound = new Howl({
            src: ['/iloveyou.wav']
        });
        sound.play();
        setLove([])

    }
    const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

        const key = keys.find(k => k.code === e.keyCode)
        const lables = ["L", "O", "V", "E"]
        if (key) {
            if (lables.includes(key.label)) {
                love.push(key.label)
                const loveTest = new Set(love)
                if (Array.from(loveTest).length === 4) {
                    loveSound()
                }
                setLove(Array.from(loveTest))
            }
            sound.play();
            key.hit = true
            setKeys([...keys])
        }
    }
    return (
        <Layout>
            <div className="p-4">
                <div className="flex flex-col">
                    <h2 className="text-7xl mb-4 text-bold">Keyboard Tester</h2>
                    <p>I was tired of adds on a keyboard tester so I made my own</p>
                    <textarea className="p-1 border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)] h-40 mt-4 mb-4" type="text" onKeyDown={keyDown} />
                </div>
                <div className="relative">
                    {keys.map(key => (
                        <div
                            key={`${key.x}${key.y}`}
                            className={`absolute
                        p-1 border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)]
                        transform hover:rotate-[1deg] transition duration-250 ease-in-out
                        ${key.hit ? "bg-black text-white" : ""}
                        `}

                            style={makeStyleObj(key)}>
                            {key.label}
                        </div>
                    ))}

                </div>
            </div>
        </Layout>
    )
}
export const Head: HeadFC = () => <title>Keyboard Tester</title>
