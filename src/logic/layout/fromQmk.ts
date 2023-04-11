import { getErrorMessage } from "../helper";
import { emptyDataFull, emptyInfoFull, getEmptyLayout } from "./blankData";
import { Layout, LayoutJson, Split } from "./types";
type QmkLayoutType = {
  LAYOUT: {
    layout: {
      matrix: number[];
      x: number;
      y: number;
      h?: number;
      w?: number;
    }[];
  };
};
// type fillInType = {
//   oledSDA?: string;
//   oledSLC?: string;
//   softSerialPin?: string;
// };
const extractValueFromJson = (
  key: string,
  fallback: any,
  object: Record<string, any>
) => {
  if (key in object) {
    return object[key];
  } else {
    return fallback;
  }
};
const createCordMapping = (
  layouts: QmkLayoutType,
  rowCount: number,
  colCount: number
): number[] => {
  const layoutsValues = Object.entries(layouts);
  if (layoutsValues[0][0] === "LAYOUT") {
    const layoutValues = Object.entries(layoutsValues[0][1])[0][1];
    if (Array.isArray(layoutValues)) {
      let coordMatrix = Array(rowCount)
        .fill(null)
        .map((s) => Array(colCount).fill(null));
      layoutValues.forEach((key, index) => {
        coordMatrix[key.matrix[0]][key.matrix[1]] = index;
      });
      const coordMapping = coordMatrix.flat().filter((pos) => pos !== null);
      return coordMapping;
    } else {
      throw new Error(
        "Error in layouts can not generate coord_mapping Please Review and fix your layout.json file"
      );
    }
  } else {
    throw new Error(
      "Error in layouts can not generate coord_mapping Please Review and fix your layout.json file"
    );
  }
};

const createLayout = (layouts: QmkLayoutType): Layout[] => {
  const layoutsValues = Object.entries(layouts);
  if (layoutsValues[0][0] === "LAYOUT") {
    const layoutValues = Object.entries(layoutsValues[0][1])[0][1];
    if (Array.isArray(layoutValues)) {
      return layoutValues.map((key) => {
        let layout: Layout = { x: key.x, y: key.y, w: 1, h: 1 };
        if (key.w) {
          layout.w = key.w;
        }
        if (key.h) {
          layout.h = key.h;
        }
        return layout;
      });
    } else {
      throw new Error(
        "Error in layouts can not generate peg layout Please Review and fix your layout.json file"
      );
    }
  } else {
    throw new Error(
      "Error in layouts can not generate peg layout Please Review and fix your layout.json file"
    );
  }
};

const extractSplit = (qmkInfo: any) => {
  if ("split" in qmkInfo) {
    let splitInfo: Split = {
      soft_serial_pin: "MISSING",
      enabled: false,
      splitPico: false,
      split_pico: false,
    };
    splitInfo.enabled = extractValueFromJson("enabled", false, qmkInfo.split);
    if (
      extractValueFromJson("bootloader", "missing", qmkInfo) === "rp2040" ||
      extractValueFromJson("processor", "missing", qmkInfo) === "RP2040"
    ) {
      splitInfo.splitPico = true;
      splitInfo.split_pico = true;
    }
    return splitInfo;
  } else {
    throw new Error("this info.json is not a split board");
  }
};
export const fromQmk = (qmkjson: string): LayoutJson => {
  let emptyLayout = getEmptyLayout();

  const qmkInfo = JSON.parse(qmkjson);
  emptyLayout.info.development_board_pin_names = extractValueFromJson(
    "development_board",
    "promicro",
    qmkInfo
  );
  emptyLayout.info.diode_direction = extractValueFromJson(
    "diode_direction",
    "COL2ROW",
    qmkInfo
  );
  emptyLayout.info.features.bootmagic = extractValueFromJson(
    "bootmagic",
    true,
    qmkInfo.features
  );
  emptyLayout.info.features.extrakey = extractValueFromJson(
    "extrakey",
    true,
    qmkInfo.features
  );
  emptyLayout.info.features.mousekey = extractValueFromJson(
    "mousekey",
    true,
    qmkInfo.features
  );
  emptyLayout.info.manufacturer = extractValueFromJson(
    "manufacturer",
    "",
    qmkInfo
  );
  emptyLayout.info.keyboard_name = extractValueFromJson(
    "keyboard_name",
    "",
    qmkInfo
  );
  emptyLayout.info.maintainer = extractValueFromJson("maintainer", "", qmkInfo);
  emptyLayout.info.encoder = extractValueFromJson("encoder", {}, qmkInfo);

  emptyLayout.features.creator = extractValueFromJson(
    "manufacturer",
    "",
    qmkInfo
  );
  emptyLayout.features.name = extractValueFromJson(
    "keyboard_name",
    "",
    qmkInfo
  );
  if (qmkInfo.matrix_pins.rows) {
    emptyLayout.info.matrix_pins.rows = extractValueFromJson(
      "rows",
      [],
      qmkInfo.matrix_pins
    );
  }
  if (qmkInfo.matrix_pins.cols) {
    emptyLayout.info.matrix_pins.cols = extractValueFromJson(
      "cols",
      [],
      qmkInfo.matrix_pins
    );
  }
  if (qmkInfo.matrix_pins.direct_pins) {
    emptyLayout.info.matrix_pins.direct_pins = extractValueFromJson(
      "direct_pins",
      [],
      qmkInfo.matrix_pins
    );
  }
  if (qmkInfo.split) {
    try {
      emptyLayout.info.split = extractSplit(qmkInfo);
    } catch (error) {
      emptyLayout.message += getErrorMessage(error);
    }
  }
  if (qmkInfo.layouts) {
    try {
      let rowCount = 0,
        colCount = 0;
      if (emptyLayout.info.matrix_pins.direct_pins) {
        rowCount = emptyLayout.info.matrix_pins.direct_pins.length;
        colCount = emptyLayout.info.matrix_pins.direct_pins[0].length;
      } else if (
        emptyLayout.info.matrix_pins.rows &&
        emptyLayout.info.matrix_pins.cols
      ) {
        rowCount = emptyLayout.info.matrix_pins.rows.length;
        colCount = emptyLayout.info.matrix_pins.cols.length;
      } else {
        throw new Error(
          "Error in layouts can not generate coord_mapping Please Review and fix your layout.json file"
        );
      }
      if (emptyLayout.info.split && emptyLayout.info.split.enabled) {
        rowCount = rowCount * 2;
      }
      const coord_mapping = createCordMapping(
        qmkInfo.layouts,
        rowCount,
        colCount
      );
      emptyLayout.info.layouts.coord_mapping = coord_mapping;
    } catch (error) {
      emptyLayout.message += getErrorMessage(error);
    }
  }
  if (qmkInfo.layouts) {
    try {
      const pegLayout = createLayout(qmkInfo.layouts);
      emptyLayout.layout = pegLayout;
    } catch (error) {
      emptyLayout.message += getErrorMessage(error);
    }
  }
  if (qmkInfo.features) {
    const features = qmkInfo.features;
    if (features.oled) {
      emptyLayout.info.oled = {
        scl_pin: "SCL",
        sda_pin: "SDA",
      };
      emptyLayout.data.pegOledDisplay = JSON.parse(
        JSON.stringify(emptyDataFull.pegOledDisplay)
      );
      emptyLayout.message += ", Cant extract OLED pins fillers used";
    }
    if (features.rgb_matrix) {
      emptyLayout.info.rgb_matrix = JSON.parse(
        JSON.stringify(emptyInfoFull.rgb_matrix)
      );

      emptyLayout.data.pegRgbMatrix = JSON.parse(
        JSON.stringify(emptyDataFull.pegRgbMatrix)
      );

      if (emptyLayout.info.layouts.coord_mapping.length > 0) {
        emptyLayout.info.rgb_matrix.led_count =
          emptyLayout.info.layouts.coord_mapping.length;
        emptyLayout.info.rgb_matrix.led_key_pos = Array(
          emptyLayout.info.layouts.coord_mapping.length
        )
          .fill(null)
          .map((_x, i) => i);
        emptyLayout.data.pegRgbMatrix.ledDisplay = Array(
          emptyLayout.info.layouts.coord_mapping.length
        ).fill([0, 0, 0]);
      }
    }
  }

  return emptyLayout;
};

const fixKey = (key: string) => {
  const badMouseKeys = [
    "KC_MS_UP",
    "KC_MS_U",
    "KC_MS_DOWN",
    "KC_MS_D",
    "KC_MS_LEFT",
    "KC_MS_L",
    "KC_MS_RIGHT",
    "KC_MS_R",
    "KC_MS_BTN1",
    "KC_BTN1",
    "KC_MS_BTN2",
    "KC_BTN2",
    "KC_MS_BTN3",
    "KC_BTN3",
    "KC_MS_BTN4",
    "KC_BTN4",
    "KC_MS_BTN5",
    "KC_BTN5",
    "KC_MS_BTN6",
    "KC_BTN6",
    "KC_MS_BTN7",
    "KC_BTN7",
    "KC_MS_BTN8",
    "KC_BTN8",
    "KC_MS_WH_UP",
    "KC_WH_U",
    "KC_MS_WH_DOWN",
    "KC_WH_D",
    "KC_MS_WH_LEFT",
    "KC_WH_L",
    "KC_MS_WH_RIGHT",
    "KC_WH_R",
    "KC_MS_ACCEL0",
    "KC_ACL0",
    "KC_MS_ACCEL1",
    "KC_ACL1",
    "KC_MS_ACCEL2",
    "KC_ACL2",]
  const mouseKeyMap = {
    KC_MS_UP: "KC.MS_UP",
    KC_MS_U: "KC.MS_UP",
    KC_MS_DOWN: "KC.MS_DOWN",
    KC_MS_D: "KC.MS_DOWN",
    KC_MS_LEFT: "KC.MS_LEFT",
    KC_MS_L: "KC.MS_LEFT",
    KC_MS_RIGHT: "KC.MS_RIGHT",
    KC_MS_R: "KC.MS_RIGHT",
    KC_MS_BTN1: "KC.MB_LMB",
    KC_BTN1: "KC.MB_LMB",
    KC_MS_BTN2: "KC.MB_RMB",
    KC_BTN2: "KC.MB_RMB",
    KC_MS_BTN3: "KC.MB_MMB",
    KC_BTN3: "KC.MB_MMB",
    KC_MS_BTN4: "KC.MB_BTN4",
    KC_BTN4: "KC.MB_BTN4",
    KC_MS_BTN5: "KC.MB_BTN5",
    KC_BTN5: "KC.MB_BTN5",
    KC_MS_BTN6: "KC.TRNS",
    KC_BTN6: "KC.TRNS",
    KC_MS_BTN7: "KC.TRNS",
    KC_BTN7: "KC.TRNS",
    KC_MS_BTN8: "KC.TRNS",
    KC_BTN8: "KC.TRNS",
    KC_MS_WH_UP: "KC.MW_UP",
    KC_WH_U: "KC.MW_UP",
    KC_MS_WH_DOWN: "KC.MW_DOWN",
    KC_WH_D: "KC.MW_DOWN",
    KC_MS_WH_LEFT: "KC.TRNS",
    KC_WH_L: "KC.TRNS",
    KC_MS_WH_RIGHT: "KC.TRNS",
    KC_WH_R: "KC.TRNS",
    KC_MS_ACCEL0: "KC.TRNS",
    KC_ACL0: "KC.TRNS",
    KC_MS_ACCEL1: "KC.TRNS",
    KC_ACL1: "KC.TRNS",
    KC_MS_ACCEL2: "KC.TRNS",
    KC_ACL2: "KC.TRNS",
  }
  const badNumberKeys = [
    "KC_0",
    "KC_1",
    "KC_4",
    "KC_7",
    "KC_2",
    "KC_5",
    "KC_8",
    "KC_3",
    "KC_6",
    "KC_9",
  ];
  if (key.startsWith("QK")) {
    return "TRNS";
  }
  if (key.startsWith("KC_")) {
    return key.replace("KC_", "KC.");
  }
  if (badNumberKeys.includes(key)) {
    return `KC.N${key.at(-1)}`;
  }
  if (badMouseKeys.includes(key)) {
    //@ts-ignore
    return mouseKeyMap[key]
  }
  return `KC.${key}`;
};
export const fromQmkJsonMap = (
  qmkjson: string,
  startingLayout: LayoutJson
): LayoutJson => {
  let emptyLayout: LayoutJson = JSON.parse(JSON.stringify(startingLayout));
  const qmkInfo = JSON.parse(qmkjson);
  const mouseKeys = [
    "KC.MB_LMB",
    "KC.MB_RMB",
    "KC.MB_MMB",
    "KC.MB_BTN4",
    "KC.MB_BTN5",
    "KC.MW_UP",
    "KC.MW_DOWN",
    "KC.MS_UP",
    "KC.MS_DOWN",
    "KC.MS_LEFT",
    "KC.MS_RIGHT",
  ];
  const meidaKeys = [
    "KC.MUTE",
    "KC.VOLU",
    "KC.VOLD",
    "KC.BRIU",
    "KC.BRID",
    "KC.MNXT",
    "KC.MPRV",
    "KC.MSTP",
    "KC.MPLY",
    "KC.EJCT",
    "KC.MFFD",
    "KC.MRWD",
  ];
  emptyLayout.data.layers = extractValueFromJson("layers", [], qmkInfo);
  emptyLayout.data.layers = emptyLayout.data.layers.map((layer) =>
    layer.map(fixKey)
  );
  emptyLayout.data.layers.forEach(layer => {
    if (layer.find(key => meidaKeys.includes(key))) {
      emptyLayout.data.used_modules.media_keys_used = true
    }
    if (layer.find(key => mouseKeys.includes(key))) {
      emptyLayout.data.used_modules.mouse_keys_used = true
    }
  })
  return emptyLayout;
};
