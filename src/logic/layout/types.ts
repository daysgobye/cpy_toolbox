export interface LayoutJson {
  message?: string;
  info: Info;
  data: Data;
  features: BoardFeatures;
  layout: Layout[];
  underglow: Underglow[];
}

export interface Info {
  manufacturer: string;
  keyboard_name: string;
  maintainer: string;
  development_board: string;
  development_board_pin_names: string;
  diode_direction: string;
  debug_enabled: boolean;
  features: Features;
  layouts: Layouts;
  rgb_matrix?: RgbMatrix;
  split?: Split;
  oled?: Oled;
  matrix_pins: MatrixPins;
  processor: string;
  encoder: Encoder;
}

export interface Features {
  bootmagic: boolean;
  extrakey: boolean;
  mousekey: boolean;
}

export interface Layouts {
  coord_mapping: number[];
}

export interface RgbMatrix {
  driver: string;
  led_count: number;
  rgb_pixel_pin: string;
  led_key_pos: number[];
  brightness_limit: number;
  num_pixels: number;
}

export interface Split {
  soft_serial_pin: string;
  enabled: boolean;
  splitPico: boolean;
  split_pico: boolean;
  tx_pin?: string;
  uart_flip?: boolean;
}

export interface Oled {
  scl_pin: string;
  sda_pin: string;
}

export interface MatrixPins {
  cols?: string[];
  rows?: string[];
  direct_pins?: string[];
}

export interface Encoder {
  rotary: Rotary[];
}

export interface Rotary {
  pin_a: string;
  pin_b: string;
}

export interface Data {
  used_modules: UsedModules;
  layers: string[][];
  codeBlock: string[];
  pegRgbMatrix?: PegRgbMatrix;
  pegOledDisplay?: PegOledDisplay;
}

export interface UsedModules {
  tap_dance_used: boolean;
  modtap_used: boolean;
  mouse_keys_used: boolean;
  sticky_mod_used: boolean;
  send_string_used: boolean;
  simple_key_sequence_used: boolean;
  media_keys_used: boolean;
  combos_used: boolean;
}

export interface PegRgbMatrix {
  ledDisplay: number[][];
  split: boolean;
  rightSide: boolean;
  disableAutoWrite: boolean;
}

export interface PegOledDisplay {
  cornerOne: CornerOne;
  cornerTwo: CornerTwo;
  cornerThree: CornerThree;
  cornerFour: CornerFour;
  toDisplay: number | "TXT" | "IMG";
  flip: boolean;
}

export interface CornerOne {
  "0": string;
  "1": string[];
}

export interface CornerTwo {
  "0": string;
  "1": string[];
}

export interface CornerThree {
  "0": string;
  "1": string[];
}

export interface CornerFour {
  "0": string;
  "1": string[];
}

export interface BoardFeatures {
  perkey: boolean;
  oled: boolean;
  ble: boolean;
  underglow: boolean;
  name: string;
  creator: string;
  perkeyCount: number;
  underglowCount: number;
  split: boolean;
  rightSide: boolean;
  encoders: boolean;
  encoderCount: number;
  rx_tx: boolean;
  uartFlip: boolean;
  splitPico: boolean;
  bootSize: number;
  serial_write: boolean;
}

export interface Layout {
  w: number;
  x: number;
  y: number;
  h?: number;
}

export interface Underglow {
  x: number;
  y: number;
  w: number;
}
