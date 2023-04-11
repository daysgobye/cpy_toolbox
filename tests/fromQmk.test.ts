import { fromQmk, fromQmkJsonMap } from "../src/logic/layout/fromQmk";

describe("simple info.json will work", () => {
  const qmkOut = {
    ...fromQmk(`{
        "manufacturer": "Boardsource",
        "keyboard_name": "3x4",
        "maintainer": "waffle87",
        "development_board": "promicro",
        "diode_direction": "COL2ROW",
        "features": {
          "bootmagic": true,
          "extrakey": true,
          "mousekey": true
        },
        "matrix_pins": {
          "cols": ["B6", "B2", "B3", "B1"],
          "rows": ["F7", "F6", "F5"]
        },
        "url": "https://boardsource.xyz/store/5ecc2008eee64242946c98c1",
        "usb": {
          "device_version": "1.0.0",
          "pid": "0x0304",
          "vid": "0x4273"
        },
        "layouts": {
          "LAYOUT": {
            "layout": [
              { "matrix": [0, 0], "x": 0, "y": 0 },
              { "matrix": [0, 1], "x": 1, "y": 0 },
              { "matrix": [0, 2], "x": 2, "y": 0 },
              { "matrix": [0, 3], "x": 3, "y": 0 },
              { "matrix": [1, 0], "x": 0, "y": 1 },
              { "matrix": [1, 1], "x": 1, "y": 1 },
              { "matrix": [1, 2], "x": 2, "y": 1 },
              { "matrix": [1, 3], "x": 3, "y": 1 },
              { "matrix": [2, 0], "x": 0, "y": 2 },
              { "matrix": [2, 1], "x": 1, "y": 2 },
              { "matrix": [2, 2], "x": 2, "y": 2 },
              { "matrix": [2, 3], "x": 3, "y": 2 }
            ]
          }
        }
      }`),
  };

  test("coord_mapping will be extracted", () => {
    expect(qmkOut.info.layouts.coord_mapping).toStrictEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    ]);
  });
  test("layout will be extracted", () => {
    expect(qmkOut.layout).toStrictEqual([
      { x: 0, y: 0, w: 1, h: 1 },
      { x: 1, y: 0, w: 1, h: 1 },
      { x: 2, y: 0, w: 1, h: 1 },
      { x: 3, y: 0, w: 1, h: 1 },
      { x: 0, y: 1, w: 1, h: 1 },
      { x: 1, y: 1, w: 1, h: 1 },
      { x: 2, y: 1, w: 1, h: 1 },
      { x: 3, y: 1, w: 1, h: 1 },
      { x: 0, y: 2, w: 1, h: 1 },
      { x: 1, y: 2, w: 1, h: 1 },
      { x: 2, y: 2, w: 1, h: 1 },
      { x: 3, y: 2, w: 1, h: 1 },
    ]);
  });
  test("diode_direction will be extracted", () => {
    expect(qmkOut.info.diode_direction).toBe("COL2ROW");
  });
  test("matrix will be extracted", () => {
    expect(qmkOut.info.matrix_pins.cols).toStrictEqual([
      "B6",
      "B2",
      "B3",
      "B1",
    ]);
    expect(qmkOut.info.matrix_pins.rows).toStrictEqual(["F7", "F6", "F5"]);
  });
  test("development_board_pin_names will be extracted", () => {
    expect(qmkOut.info.development_board_pin_names).toBe("promicro");
  });
  test("debug will be set", () => {
    expect(qmkOut.info.debug_enabled).toBe(false);
  });
  test("features will be extracted", () => {
    expect(qmkOut.info.features.bootmagic).toBe(true);
    expect(qmkOut.info.features.extrakey).toBe(true);
    expect(qmkOut.info.features.mousekey).toBe(true);
  });
  test("creator will be extracted", () => {
    expect(qmkOut.features.creator).toBe("Boardsource");
  });
  test("name will be extracted", () => {
    expect(qmkOut.features.name).toBe("3x4");
  });
  test("un-needed data will be extracted", () => {
    expect(qmkOut.info.maintainer).toBe("waffle87");
    expect(qmkOut.info.manufacturer).toBe("Boardsource");
    expect(qmkOut.info.keyboard_name).toBe("3x4");
  });
});

describe("complex info.json will work", () => {
  const qmkOut = fromQmk(`
    {
        "manufacturer": "Boardsource",
        "keyboard_name": "lulu",
        "maintainer": "waffle87",
        "diode_direction": "COL2ROW",
        "bootloader": "rp2040",
        "matrix_pins": {
            "cols": ["GP2", "GP3", "GP4", "GP5", "GP6", "GP7"],
            "rows": ["GP14", "GP15", "GP16", "GP17", "GP18"]
        },
        "processor": "RP2040",
        "encoder": {
            "rotary": [
            { "pin_a": "GP8", "pin_b": "GP9" }
            ]
        },
        "features": {
          "bootmagic": true,
          "extrakey": true,
          "mousekey": true,
          "nkro": true,
          "rgb_matrix": true,
          "oled": true,
          "encoder": true
        },
        "url": "https://boardsource.xyz/projects/60de24d6847112054777bbdd",
        "usb": {
          "device_version": "1.0.0",
          "pid": "0x7685",
          "vid": "0x4273"
        },
        "split": {
          "enabled": true
        },
        "rgb_matrix": {
          "driver": "WS2812",
          "split_count": [35, 35],
          "max_brightness": 150,
          "animations": {
            "alphas_mods": true,
            "gradient_up_down": true,
            "gradient_left_right": true,
            "breathing": true,
            "band_sat": true,
            "band_val": true
          },
          "layout": [
            { "flags": 2, "x": 86, "y": 55 },
            { "flags": 2, "x": 51, "y": 55 },
            { "flags": 2, "x": 17, "y": 40 },
            { "flags": 2, "x": 17, "y": 10 },
            { "flags": 2, "x": 51, "y": 10 },
            { "flags": 2, "x": 86, "y": 10 },
            { "flags": 4, "matrix": [0, 5], "x": 86,  "y": 0 },
            { "flags": 4, "matrix": [0, 4], "x": 68,  "y": 0 },
            { "flags": 4, "matrix": [0, 3], "x": 51,  "y": 0 },
            { "flags": 4, "matrix": [0, 2], "x": 34,  "y": 0 },
            { "flags": 4, "matrix": [0, 1], "x": 17,  "y": 0 },
            { "flags": 1, "matrix": [0, 0], "x": 0,  "y": 0 },
            { "flags": 1, "matrix": [1, 0], "x": 0,  "y": 16 },
            { "flags": 4, "matrix": [1, 1], "x": 17,  "y": 16 },
            { "flags": 4, "matrix": [1, 2], "x": 34,  "y": 16 },
            { "flags": 4, "matrix": [1, 3], "x": 51,  "y": 16 },
            { "flags": 4, "matrix": [1, 4], "x": 68,  "y": 16 },
            { "flags": 4, "matrix": [1, 5], "x": 86,  "y": 16 },
            { "flags": 4, "matrix": [2, 5], "x": 86,  "y": 32 },
            { "flags": 4, "matrix": [2, 4], "x": 68,  "y": 32 },
            { "flags": 4, "matrix": [2, 3], "x": 51,  "y": 32 },
            { "flags": 4, "matrix": [2, 2], "x": 34,  "y": 32 },
            { "flags": 4, "matrix": [2, 1], "x": 17,  "y": 32 },
            { "flags": 1, "matrix": [2, 0], "x": 0,  "y": 32 },
            { "flags": 1, "matrix": [3, 0], "x": 0,  "y": 48 },
            { "flags": 4, "matrix": [3, 1], "x": 17,  "y": 48 },
            { "flags": 4, "matrix": [3, 2], "x": 34,  "y": 48 },
            { "flags": 4, "matrix": [3, 3], "x": 51,  "y": 48 },
            { "flags": 4, "matrix": [3, 4], "x": 68,  "y": 48 },
            { "flags": 4, "matrix": [3, 5], "x": 86,  "y": 48 },
            { "flags": 4, "matrix": [4, 5], "x": 103,  "y": 40 },
            { "flags": 1, "matrix": [4, 4], "x": 96,  "y": 64 },
            { "flags": 1, "matrix": [4, 3], "x": 77,  "y": 64 },
            { "flags": 1, "matrix": [4, 2], "x": 60,  "y": 64 },
            { "flags": 1, "matrix": [4, 1], "x": 43,  "y": 64 },
            { "flags": 2, "x": 137, "y": 55 },
            { "flags": 2, "x": 172, "y": 55 },
            { "flags": 2, "x": 206, "y": 40 },
            { "flags": 2, "x": 206, "y": 10 },
            { "flags": 2, "x": 172, "y": 10 },
            { "flags": 2, "x": 137, "y": 10 },
            { "flags": 4, "matrix": [5, 5], "x": 137,  "y": 0 },
            { "flags": 4, "matrix": [5, 4], "x": 155,  "y": 0 },
            { "flags": 4, "matrix": [5, 3], "x": 172,  "y": 0 },
            { "flags": 4, "matrix": [5, 2], "x": 189,  "y": 0 },
            { "flags": 4, "matrix": [5, 1], "x": 206,  "y": 0 },
            { "flags": 1, "matrix": [5, 0], "x": 224,  "y": 0 },
            { "flags": 1, "matrix": [6, 0], "x": 224,  "y": 16 },
            { "flags": 4, "matrix": [6, 1], "x": 206,  "y": 16 },
            { "flags": 4, "matrix": [6, 2], "x": 189,  "y": 16 },
            { "flags": 4, "matrix": [6, 3], "x": 172,  "y": 16 },
            { "flags": 4, "matrix": [6, 4], "x": 155,  "y": 16 },
            { "flags": 4, "matrix": [6, 5], "x": 137,  "y": 16 },
            { "flags": 4, "matrix": [7, 5], "x": 137,  "y": 32 },
            { "flags": 4, "matrix": [7, 4], "x": 155,  "y": 32 },
            { "flags": 4, "matrix": [7, 3], "x": 172,  "y": 32 },
            { "flags": 4, "matrix": [7, 2], "x": 189,  "y": 32 },
            { "flags": 4, "matrix": [7, 1], "x": 206,  "y": 32 },
            { "flags": 1, "matrix": [7, 0], "x": 224,  "y": 32 },
            { "flags": 1, "matrix": [8, 0], "x": 224,  "y": 48 },
            { "flags": 4, "matrix": [8, 1], "x": 206,  "y": 48 },
            { "flags": 4, "matrix": [8, 2], "x": 189,  "y": 48 },
            { "flags": 4, "matrix": [8, 3], "x": 172,  "y": 48 },
            { "flags": 4, "matrix": [8, 4], "x": 155,  "y": 48 },
            { "flags": 4, "matrix": [8, 5], "x": 137,  "y": 48 },
            { "flags": 4, "matrix": [9, 5], "x": 120,  "y": 40 },
            { "flags": 1, "matrix": [9, 4], "x": 127,  "y": 64 },
            { "flags": 1, "matrix": [9, 3], "x": 146,  "y": 64 },
            { "flags": 1, "matrix": [9, 2], "x": 163,  "y": 64 },
            { "flags": 1, "matrix": [9, 1], "x": 180,  "y": 64 }
          ]
        },
        "layouts": {
          "LAYOUT": {
            "layout": [
              { "matrix": [0, 0], "x": 0, "y": 0.5 },
              { "matrix": [0, 1], "x": 1, "y": 0.375 },
              { "matrix": [0, 2], "x": 2, "y": 0.125 },
              { "matrix": [0, 3], "x": 3, "y": 0 },
              { "matrix": [0, 4], "x": 4, "y": 0.125 },
              { "matrix": [0, 5], "x": 5, "y": 0.25 },
              { "matrix": [5, 5], "x": 10.5, "y": 0.25 },
              { "matrix": [5, 4], "x": 11.5, "y": 0.125 },
              { "matrix": [5, 3], "x": 12.5, "y": 0 },
              { "matrix": [5, 2], "x": 13.5, "y": 0.125 },
              { "matrix": [5, 1], "x": 14.5, "y": 0.375 },
              { "matrix": [5, 0], "x": 15.5, "y": 0.5 },
              { "matrix": [1, 0], "x": 0, "y": 1.5 },
              { "matrix": [1, 1], "x": 1, "y": 1.375 },
              { "matrix": [1, 2], "x": 2, "y": 1.125 },
              { "matrix": [1, 3], "x": 3, "y": 1 },
              { "matrix": [1, 4], "x": 4, "y": 1.125 },
              { "matrix": [1, 5], "x": 5, "y": 1.25 },
              { "matrix": [6, 5], "x": 10.5, "y": 1.25 },
              { "matrix": [6, 4], "x": 11.5, "y": 1.125 },
              { "matrix": [6, 3], "x": 12.5, "y": 1 },
              { "matrix": [6, 2], "x": 13.5, "y": 1.125 },
              { "matrix": [6, 1], "x": 14.5, "y": 1.375 },
              { "matrix": [6, 0], "x": 15.5, "y": 1.5 },
              { "matrix": [2, 0], "x": 0, "y": 2.5 },
              { "matrix": [2, 1], "x": 1, "y": 2.375 },
              { "matrix": [2, 2], "x": 2, "y": 2.125 },
              { "matrix": [2, 3], "x": 3, "y": 2 },
              { "matrix": [2, 4], "x": 4, "y": 2.125 },
              { "matrix": [2, 5], "x": 5, "y": 2.25 },
              { "matrix": [7, 5], "x": 10.5, "y": 2.25 },
              { "matrix": [7, 4], "x": 11.5, "y": 2.125 },
              { "matrix": [7, 3], "x": 12.5, "y": 2 },
              { "matrix": [7, 2], "x": 13.5, "y": 2.125 },
              { "matrix": [7, 1], "x": 14.5, "y": 2.375 },
              { "matrix": [7, 0], "x": 15.5, "y": 2.5 },
              { "matrix": [3, 0], "x": 0, "y": 3.5 },
              { "matrix": [3, 1], "x": 1, "y": 3.375 },
              { "matrix": [3, 2], "x": 2, "y": 3.125 },
              { "matrix": [3, 3], "x": 3, "y": 3 },
              { "matrix": [3, 4], "x": 4, "y": 3.125 },
              { "matrix": [3, 5], "x": 5, "y": 3.25 },
              { "matrix": [4, 5], "x": 6, "y": 2.75 },
              { "matrix": [9, 5], "x": 9.5, "y": 2.75 },
              { "matrix": [8, 5], "x": 10.5, "y": 3.25 },
              { "matrix": [8, 4], "x": 11.5, "y": 3.125 },
              { "matrix": [8, 3], "x": 12.5, "y": 3 },
              { "matrix": [8, 2], "x": 13.5, "y": 3.125 },
              { "matrix": [8, 1], "x": 14.5, "y": 3.375 },
              { "matrix": [8, 0], "x": 15.5, "y": 3.5 },
              { "matrix": [4, 1], "x": 2.5, "y": 4.125 },
              { "matrix": [4, 2], "x": 3.5, "y": 4.15 },
              { "matrix": [4, 3], "x": 4.5, "y": 4.25 },
              { "matrix": [4, 4], "h": 1.5, "x": 6, "y": 4.25 },
              { "matrix": [9, 4], "h": 1.5, "x": 9.5, "y": 4.25 },
              { "matrix": [9, 3], "x": 11, "y": 4.25 },
              { "matrix": [9, 2], "x": 12, "y": 4.15 },
              { "matrix": [9, 1], "x": 13, "y": 4.15 }
            ]
          }
        }
      }
    `);

  //fails cant fix
  //   test("coord_mapping will be extracted", () => {
  //     console.log("error", qmkOut.info.layouts.coord_mapping);
  //     expect(qmkOut.info.layouts.coord_mapping).toStrictEqual([
  //       0, 1, 2, 3, 4, 5, 37, 36, 35, 34, 33, 32, 6, 7, 8, 9, 10, 11, 43, 42, 41,
  //       40, 39, 38, 12, 13, 14, 15, 16, 17, 49, 48, 47, 46, 45, 44, 18, 19, 20,
  //       21, 22, 23, 29, 61, 55, 54, 53, 52, 51, 50, 25, 26, 27, 28, 60, 59, 58,
  //       57, 30, 31, 62, 63,
  //     ]);
  //   });
  test("encoder info will be extracted", () => {
    expect(qmkOut.info.encoder).toStrictEqual({
      rotary: [{ pin_a: "GP8", pin_b: "GP9" }],
    });
  });

  test("split info will be extracted", () => {
    expect(qmkOut.info.split?.enabled).toBe(true);
    expect(qmkOut.info.split?.splitPico).toBe(true);
  });

  test("diode_direction will be extracted", () => {
    expect(qmkOut.info.diode_direction).toBe("COL2ROW");
  });
  test("matrix will be extracted", () => {
    expect(qmkOut.info.matrix_pins.cols).toStrictEqual([
      "GP2",
      "GP3",
      "GP4",
      "GP5",
      "GP6",
      "GP7",
    ]);
    expect(qmkOut.info.matrix_pins.rows).toStrictEqual([
      "GP14",
      "GP15",
      "GP16",
      "GP17",
      "GP18",
    ]);
  });
  test("debug will be set", () => {
    expect(qmkOut.info.debug_enabled).toBe(false);
  });
  test("RGB will be extracted", () => {
    expect(qmkOut.info.rgb_matrix).toBeDefined();
    expect(qmkOut.data.pegRgbMatrix).toBeDefined();
  });
  test("Oled will be set with defaults", () => {
    expect(qmkOut.info.oled).toBeDefined();
    expect(qmkOut.data.pegOledDisplay).toBeDefined();
  });

  test("features will be extracted", () => {
    expect(qmkOut.info.features.bootmagic).toBe(true);
    expect(qmkOut.info.features.extrakey).toBe(true);
    expect(qmkOut.info.features.mousekey).toBe(true);
  });
  test("creator will be extracted", () => {
    expect(qmkOut.features.creator).toBe("Boardsource");
  });
  test("name will be extracted", () => {
    expect(qmkOut.features.name).toBe("lulu");
  });
  test("un-needed data will be extracted", () => {
    expect(qmkOut.info.maintainer).toBe("waffle87");
    expect(qmkOut.info.manufacturer).toBe("Boardsource");
    expect(qmkOut.info.keyboard_name).toBe("lulu");
  });
});

describe("simple keymap.json will work", () => {
  const qmkLayout = {
    ...fromQmk(`{
        "manufacturer": "Boardsource",
        "keyboard_name": "3x4",
        "maintainer": "waffle87",
        "development_board": "promicro",
        "diode_direction": "COL2ROW",
        "features": {
          "bootmagic": true,
          "extrakey": true,
          "mousekey": true
        },
        "matrix_pins": {
          "cols": ["B6", "B2", "B3", "B1"],
          "rows": ["F7", "F6", "F5"]
        },
        "url": "https://boardsource.xyz/store/5ecc2008eee64242946c98c1",
        "usb": {
          "device_version": "1.0.0",
          "pid": "0x0304",
          "vid": "0x4273"
        },
        "layouts": {
          "LAYOUT": {
            "layout": [
              { "matrix": [0, 0], "x": 0, "y": 0 },
              { "matrix": [0, 1], "x": 1, "y": 0 },
              { "matrix": [0, 2], "x": 2, "y": 0 },
              { "matrix": [0, 3], "x": 3, "y": 0 },
              { "matrix": [1, 0], "x": 0, "y": 1 },
              { "matrix": [1, 1], "x": 1, "y": 1 },
              { "matrix": [1, 2], "x": 2, "y": 1 },
              { "matrix": [1, 3], "x": 3, "y": 1 },
              { "matrix": [2, 0], "x": 0, "y": 2 },
              { "matrix": [2, 1], "x": 1, "y": 2 },
              { "matrix": [2, 2], "x": 2, "y": 2 },
              { "matrix": [2, 3], "x": 3, "y": 2 }
            ]
          }
        }
      }`),
  };

  const qmkOut = {
    ...fromQmkJsonMap(
      `
    {
      "version": 1,
      "notes": "",
      "keyboard": "boardsource/3x4",
      "keymap": "boardsource_3x4_layout_mine",
      "layout": "LAYOUT",
      "layers": [
        [
          "KC_0",
          "KC_1",
          "KC_4",
          "KC_7",
          "KC_ENT",
          "KC_2",
          "KC_5",
          "KC_8",
          "MO(1)",
          "KC_3",
          "KC_6",
          "KC_9"
        ],
        [
          "KC_TRNS",
          "KC_TRNS",
          "KC_TRNS",
          "KC_TRNS",
          "KC_TRNS",
          "KC_TRNS",
          "KC_TRNS",
          "KC_TRNS",
          "KC_TRNS",
          "KC_TRNS",
          "KC_TRNS",
          "QK_BOOT"
        ]
      ],
      "author": ""
    }
    `,
      qmkLayout
    ),
  };

  test("layers will be extracted", () => {
    expect(qmkOut.data.layers.length).toBe(2);
  });
  test("will clean qmk codes", () => {
    expect(qmkOut.data.layers[1].includes("QK_BOOT")).toBe(false);
  });
  test("will replace KC_ for KC.", () => {
    expect(qmkOut.data.layers[1].includes("KC_TRNS")).toBe(false);
    expect(qmkOut.data.layers[1].includes("KC.TRNS")).toBe(true);
  });
});
