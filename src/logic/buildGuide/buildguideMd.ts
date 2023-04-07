export type Answers = {
  OLED: boolean;
  ENCODERS: boolean;
  LED: boolean;
  KEYBOARDNAME: string;
  CONTROLLERPLACEMENT: string;
  SWITCHCOUNT: number;
  PCBCOUNT: number;
  DIODESTYLE: string;
  CONTROLLERSTYLE: string;
  CONTROLLERCOUNT: number;
  SWITCHSTYLE: string;
  NULLEDCOMPONETSIMAGE: string;
  DIODECLOSEUPIMG1: string;
  DIODECLOSEUPIMG2: string;
  DIODECLOSEUPIMG3: string;
  CONTROLLERCLOSEUPIMG1: string;
  CONTROLLERCLOSEUPIMG2: string;
  CONTROLLERCLOSEUPIMG3: string;
  LEDORIENTATIONIMG1: string;
  LEDORIENTATIONIMG2: string;
  LEDORDERIMG: string;
  LEDCLOSEUPIMG1: string;
  LEDCLOSEUPIMG2: string;
  LEDCLOSEUPIMG3: string;
  LEDCLOSEUPIMG4: string;
};
export const returnGuide = (answers: Answers) => {
  const {
    ENCODERS,
    LED,
    OLED,
    KEYBOARDNAME,
    CONTROLLERPLACEMENT,
    SWITCHCOUNT,
    PCBCOUNT,
    DIODESTYLE,
    CONTROLLERSTYLE,
    CONTROLLERCOUNT,
    SWITCHSTYLE,
    NULLEDCOMPONETSIMAGE,
    DIODECLOSEUPIMG1,
    DIODECLOSEUPIMG2,
    DIODECLOSEUPIMG3,
    CONTROLLERCLOSEUPIMG1,
    CONTROLLERCLOSEUPIMG2,
    CONTROLLERCLOSEUPIMG3,
    LEDORIENTATIONIMG1,
    LEDORIENTATIONIMG2,
    LEDORDERIMG,
    LEDCLOSEUPIMG1,
    LEDCLOSEUPIMG2,
    LEDCLOSEUPIMG3,
    LEDCLOSEUPIMG4,
  } = answers;

  const oled = {
    table: OLED ? `| 128x32 OLED Display         | 2           |` : "",
    guide: OLED
      ? `
    ## OLEDs

1. Insert headers from front, solder in from the back.
2. Solder only one of pins to begin with.
3. While reflowing solder joint, position OLED so that it is level & straight.
4. Solder remaining pins and clip extra length of pins.
    `
      : "",
  };

  const led = {
    table: LED
      ? `| SK6812 Mini-E LED           | ${SWITCHCOUNT} |
| WS2812B LED                 | 8           |`
      : "",
    guide: LED
      ? `
    ## LEDs

**Orientation**: Notched corner/pin facing the pad marked with rectangle. This applies for both SK6812 Mini-E & WS2812B LEDs.
![sk6812 mini e orientation](${LEDORIENTATIONIMG1})
![ws2812b orientation](${LEDORIENTATIONIMG2})

- Notes: \
  \- This component is heat sensitive. Be cautious and work at a safe temp (~300c). \
  \- It is wise to test the LEDs as you solder then. Consider [soldering your controllers beforehand](#microcontrollers). \
  \- The LED order is somewhat outlined ![LED order](${LEDORDERIMG}) and should be followed in order when building.

1. Solder one pad. (it may be easier to solder all 4 pads before placing LED down when installing WS2812B LEDs)
   ![sk6812 mini e one pad](${LEDCLOSEUPIMG1})
   ![ws2812b 4 pads](https://i.imgur.com/eAuOY2N.jpeg)
2. While holding LED with tweezers, reflow solder and place LED down on pad.
   ![sk6812 mini e placed](${LEDCLOSEUPIMG2})
   ![ws2812b placed](${LEDCLOSEUPIMG3})
3. Solder remaining pads.
   ![sk6812 mini e complete](${LEDCLOSEUPIMG4})
    `
      : "",
  };

  const encoder = {
    table: ENCODERS ? `| EC11 Encoder + Knob         | 2           |` : "",
    guide: ENCODERS
      ? `
    ### Encoders

    1. Secure in place using tape or hands.
    2. Apply solder to all five pins.
    
    `
      : "",
  };

  const split = {
    table: `| TRRS Jack                                  | 2               |
| TRRS Cable                                 | 1               |`,
    guide: `
    ### TRRS jacks

    1. Position TRRS jack on front of PCB and secure with tape.
    2. Apply solder to all four pins.
    
    `,
  };
  const t = {
    table: `
    
    `,
    guide: `
   
    `,
  };

  const base = `
### This guide is for ${KEYBOARDNAME} PCBs.

# Parts

### Required

| Item                                       | Count           |
| ------------------------------------------ | --------------- |
| ${DIODESTYLE} Diodes                          | ${SWITCHCOUNT}     |
| PCB                                        | ${PCBCOUNT}        |
| ${CONTROLLERSTYLE} or similar microcontroller | ${CONTROLLERCOUNT} |
${split.table}
| Reset Switch                               | 2               |
| ${SWITCHSTYLE} Hotswap Sockets                | ${SWITCHCOUNT}     |
| ${SWITCHSTYLE} Switches                       | ${SWITCHCOUNT}     |
| ${SWITCHSTYLE} Keycaps                        | ${SWITCHCOUNT}     |

${
  ENCODERS || LED || OLED
    ? ` ### Optional
| Item                        | Count       |
| --------------------------- | ----------- |`
    : ""
}
${oled.table}
${led.table}
${encoder.table}

![components](${NULLEDCOMPONETSIMAGE})

# Soldering

## Diodes

**Orientation**: Black bar facing downwards or towards the microcontroller.

1. Solder one pad.
   ![one pad - diode](${DIODECLOSEUPIMG1})
2. While holding diode with tweezers, reflow solder and place diode down on pad.
   ![diode placed](${DIODECLOSEUPIMG2})
3. Solder other pad.
   ![diode complete](${DIODECLOSEUPIMG3})

- Note, when working with [MELF](https://en.wikipedia.org/wiki/Metal_electrode_leadless_face) package diodes,
  you may need to reflow and add more solder a couple times before an adequate connection is made.

${led.guide}

## ${CONTROLLERCOUNT < 1 ? "Microcontroller" : "Microcontrollers"}

**Orientation**: ${
    CONTROLLERCOUNT < 1 ? "microcontrollers" : "Both microcontrollers"
  } ${CONTROLLERPLACEMENT}.

- Note, it is recommended to flash each microcontroller prior to soldering. See [firmware](d#firmware) section for more.

1. Insert headers from front, solder in from the back.
   ![headers inserted](${CONTROLLERCLOSEUPIMG1})
2. Place microcontroller ${CONTROLLERPLACEMENT}.
   ![microcontroller placed](${CONTROLLERCLOSEUPIMG2})
3. Apply solder to all pins.
4. Use flush cutters or similar to trim excess from pins on each side.
   ![microcontroller finished](${CONTROLLERCLOSEUPIMG3})



## Misc.
${oled.guide}

${split.guide}
### Reset switches

1. Solder one pad.
2. While holding switch with tweezers, refolw solder and place switch down on pad.
3. Solder remaining 3 pads.

### Hotswap sockets

1. Solder one pad.
2. While holding hotswap socket (fingers are fine), reflow solder and place socket down on pad.
3. Solder other pad.

- Note, don't hesitate to use a little extra solder, as that will help secure the socket and prevent it from being ripped off.

${encoder.guide}
## Firmware

To begin, follow the [QMK setup guide](https://docs.qmk.fm/#/newbs_getting_started). (if working from an existing installation, an [update](https://docs.qmk.fm/#/newbs_git_using_your_master_branch?id=updating-your-master-branch) may be needed.) \
For flashing instructions, see [doc](https://docs.qmk.fm/#/newbs_flashing) or [video](https://www.youtube.com/watch?v=fuBJbdCFF0Q)

#### Extra

For questions, ask in [Boardsource Discord server](https://discord.gg/5qpqbgaTYz)

`;
  return base;
};
