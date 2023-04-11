import { BoardFeatures, Data, Info, LayoutJson } from "./types";

export const emptyInfo: Info = {
  manufacturer: "",
  keyboard_name: "",
  maintainer: "",
  development_board: "",
  development_board_pin_names: "",
  diode_direction: "",
  debug_enabled: false,
  features: {
    bootmagic: false,
    extrakey: false,
    mousekey: false,
  },
  layouts: {
    coord_mapping: [],
  },
  matrix_pins: {
    cols: [],
    rows: [],
  },
  processor: "",
  encoder: {
    rotary: [],
  },
};
export const emptyInfoFull: Info = {
  manufacturer: "",
  keyboard_name: "",
  maintainer: "",
  development_board: "",
  development_board_pin_names: "",
  diode_direction: "",
  debug_enabled: false,
  features: {
    bootmagic: false,
    extrakey: false,
    mousekey: false,
  },
  layouts: {
    coord_mapping: [],
  },
  rgb_matrix: {
    driver: "WS2812",
    led_count: 0,
    rgb_pixel_pin: "NEOPIXEL",
    led_key_pos: [],
    brightness_limit: 1,
    num_pixels: 0,
  },
  split: {
    soft_serial_pin: "",
    enabled: false,
    splitPico: false,
    split_pico: false,
    tx_pin: "",
    uart_flip: false,
  },
  oled: {
    scl_pin: "SCL",
    sda_pin: "SDA",
  },
  matrix_pins: {
    cols: [],
    rows: [],
  },
  processor: "",
  encoder: {
    rotary: [],
  },
};
export const emptyData: Data = {
  used_modules: {
    tap_dance_used: false,
    modtap_used: false,
    mouse_keys_used: false,
    sticky_mod_used: false,
    send_string_used: false,
    simple_key_sequence_used: false,
    media_keys_used: false,
    combos_used: false,
  },
  layers: [],
  codeBlock: [],
};
export const emptyDataFull: Data = {
  used_modules: {
    tap_dance_used: false,
    modtap_used: false,
    mouse_keys_used: false,
    sticky_mod_used: false,
    send_string_used: false,
    simple_key_sequence_used: false,
    media_keys_used: false,
    combos_used: false,
  },
  layers: [],
  codeBlock: [],
  pegRgbMatrix: {
    ledDisplay: [],
    split: false,
    rightSide: false,
    disableAutoWrite: false,
  },
  pegOledDisplay: {
    cornerOne: {
      0: "STATIC",
      1: ["One"],
    },
    cornerTwo: {
      0: "STATIC",
      1: ["Two"],
    },
    cornerThree: {
      0: "STATIC",
      1: ["Three"],
    },
    cornerFour: {
      0: "STATIC",
      1: ["Four"],
    },
    toDisplay: "TXT",
    flip: false,
  },
};
export const emptyFeatures: BoardFeatures = {
  perkey: false,
  oled: false,
  ble: false,
  underglow: false,
  name: "",
  creator: "",
  perkeyCount: 0,
  underglowCount: 0,
  split: false,
  rightSide: false,
  encoders: false,
  encoderCount: 0,
  rx_tx: false,
  uartFlip: false,
  splitPico: false,
  bootSize: 0,
  serial_write: false,
};
export const EmptyLayout: LayoutJson = {
  data: emptyData,
  info: emptyInfo,
  features: emptyFeatures,
  layout: [],
  underglow: [],
};

export const getEmptyLayout = () => {
  return JSON.parse(JSON.stringify(EmptyLayout));
};
