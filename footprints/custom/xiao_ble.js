// Seeduino XIAO with vias and edge cuts for underside pads
// By default includes pads and holes for all side pins and holes and edge cuts for BAT+, RST and GND underside Xiao pads
// Inspired by

//
// Params
//    side: default is 'F'
//      may be set to 'F' (Front) or 'B' (Back )
//    holes: default is true
//      if true, will include holes and pads for all side pins else will include only pads
//    dio: default is false
//      if true, will add holes for DIO and CLK underside Xiao pads
//    diode: default is true
//      if true, will include smd diode pads and route from pin 2 to diode's pin 'from', diode's net 'to' will be set to switch's net 'to'
//    battery_minus: default is false
//      if true, will include hole for BAT- underside Xiao pad
//    nfc: default is false
//      if true, will include holes and edge cut for NFC underside Xiao pads

module.exports = {
  params: {
    class: "MCU",
    side: "F",
    holes: true,
    dio: false,
    battery_minus: false,
    nfc: false,
    P0: { type: "net", value: "P0" },
    P1: { type: "net", value: "P1" },
    P2: { type: "net", value: "P2" },
    P3: { type: "net", value: "P3" },
    P4: { type: "net", value: "P4" },
    P5: { type: "net", value: "P5" },
    P6: { type: "net", value: "P6" },
    P7: { type: "net", value: "P7" },
    P8: { type: "net", value: "P8" },
    P9: { type: "net", value: "P9" },
    P10: { type: "net", value: "P10" },
    RAW3V3: { type: "net", value: "RAW3V3" },
    GND: { type: "net", value: "GND" },
    RAW5V: { type: "net", value: "RAW5V" },
    BATP: { type: "net", value: "BATP" },
    BATN: { type: "net", value: "BATN" },
    RST: { type: "net", value: "RST" },
    CLK: { type: "net", value: "CLK" },
    DIO: { type: "net", value: "DIO" },
    NFC0: { type: "net", value: "NFC0" },
    NFC1: { type: "net", value: "NFC1" },
  },
  body: (p) => {
    const pos_right = p.side == "F" ? "" : "-";
    const pos_left = p.side == "F" ? "-" : "";

    const top = `
      (module "Seeeduino XIAO nRF52840" (layer "${p.side}.Cu") (tedit 613ABEDD)
        ${p.at /* parametric position */}

        ${"" /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${
      p.ref_hide
    } (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        ${"" /* component outline */}
        (fp_line (start -8.89 10.48) (end 8.89 10.48) (layer ${
          p.side
        }.SilkS) (width 0.15))
        (fp_line (start 8.89 10.48) (end 8.89 9) (layer ${
          p.side
        }.SilkS) (width 0.15))
        (fp_line (start -8.89 10.48) (end -8.89 9) (layer ${
          p.side
        }.SilkS) (width 0.15))

        (fp_line (start 8.89 -10.48) (end -8.89 -10.48) (layer ${
          p.side
        }.SilkS) (width 0.15))
        (fp_line (start -8.89 -10.48) (end -8.89 -9) (layer ${
          p.side
        }.SilkS) (width 0.15))
        (fp_line (start 8.89 -10.48) (end 8.89 -9) (layer ${
          p.side
        }.SilkS) (width 0.15))

        ${"" /* illustration of the (possible) USB port overhang */}
        (fp_line (start -4.501 -4.655) (end -4.501 -12) (layer Dwgs.User) (width 0.15))
        (fp_line (start -4.501 -12) (end 4.501 -12) (layer Dwgs.User) (width 0.15))
        (fp_line (start 4.501 -12) (end 4.501 -4.655) (layer Dwgs.User) (width 0.15))
        (fp_line (start 4.501 -4.655) (end -4.501 -4.655) (layer Dwgs.User) (width 0.15))

        ${`` /* Pads */}
        (pad "1" smd oval (at ${pos_left}8.255 -7.62 ${
      p.rot
    }) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${
      p.side
    }.Mask") ${p.P0.str})
        (pad "2" smd oval (at ${pos_left}8.255 -5.08 ${
      p.rot
    }) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${
      p.side
    }.Mask") ${p.P1.str})
        (pad "3" smd oval (at ${pos_left}8.255 -2.54 ${
      p.rot
    }) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${
      p.side
    }.Mask") ${p.P2.str})
        (pad "4" smd oval (at ${pos_left}8.255 0 ${
      p.rot
    }) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${
      p.side
    }.Mask") ${p.P3.str})
        (pad "5" smd oval (at ${pos_left}8.255 2.54 ${
      p.rot
    }) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${
      p.side
    }.Mask") ${p.P4.str})
        (pad "6" smd oval (at ${pos_left}8.255 5.08 ${
      p.rot
    }) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${
      p.side
    }.Mask") ${p.P5.str})
        (pad "7" smd oval (at ${pos_left}8.255 7.62 ${
      p.rot
    }) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${
      p.side
    }.Mask") ${p.P6.str})

        (pad "8" smd oval (at ${pos_right}8.255 7.62 ${
      p.rot
    }) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${
      p.side
    }.Mask") ${p.P7.str})
        (pad "9" smd oval (at ${pos_right}8.255 5.08 ${
      p.rot
    }) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${
      p.side
    }.Mask") ${p.P8.str})
        (pad "10" smd oval (at ${pos_right}8.255 2.54 ${
      p.rot
    }) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${
      p.side
    }.Mask") ${p.P9.str})
        (pad "11" smd oval (at ${pos_right}8.255 0 ${
      p.rot
    }) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${
      p.side
    }.Mask") ${p.P10.str})
        (pad "12" smd oval (at ${pos_right}8.255 -2.54 ${
      p.rot
    }) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${
      p.side
    }.Mask") ${p.RAW3V3.str})
        (pad "13" smd oval (at ${pos_right}8.255 -5.08 ${
      p.rot
    }) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${
      p.side
    }.Mask") ${p.GND.str})
        (pad "14" smd oval (at ${pos_right}8.255 -7.62 ${
      p.rot
    }) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${
      p.side
    }.Mask") ${p.RAW5V.str})

        ${"" /* Reset */}
        (pad "" thru_hole circle (at ${pos_left}1.27 -6.033) (size 1.4 1.4) (drill 1) (layers *.Cu *.Mask) ${
      p.RST.str
    })
        (pad "" thru_hole circle (at ${pos_right}1.27 -6.033) (size 1.4 1.4) (drill 1) (layers *.Cu *.Mask) ${
      p.GND.str
    })
        (fp_line (start -1.02 -8.822) (end 1.02 -8.822) (layer Edge.Cuts) (width 0.1))
        (fp_line (start 1.02 -8.822) (end 1.02 -8.322) (layer Edge.Cuts) (width 0.1))
        (fp_line (start 1.02 -8.322) (end 1.52 -8.322) (layer Edge.Cuts) (width 0.1))
        (fp_line (start 1.52 -8.322) (end 1.52 -6.282) (layer Edge.Cuts) (width 0.1))
        (fp_line (start 1.52 -6.282) (end 1.02 -6.282) (layer Edge.Cuts) (width 0.1))
        (fp_line (start 1.02 -6.282) (end 1.02 -5.782) (layer Edge.Cuts) (width 0.1))
        (fp_line (start 1.02 -5.782) (end -1.02 -5.782) (layer Edge.Cuts) (width 0.1))
        (fp_line (start -1.02 -5.782) (end -1.02 -6.282) (layer Edge.Cuts) (width 0.1))
        (fp_line (start -1.02 -6.282) (end -1.52 -6.282) (layer Edge.Cuts) (width 0.1))
        (fp_line (start -1.52 -6.282) (end -1.52 -8.322) (layer Edge.Cuts) (width 0.1))
        (fp_line (start -1.52 -8.322) (end -1.02 -8.322) (layer Edge.Cuts) (width 0.1))
        (fp_line (start -1.02 -8.322) (end -1.02 -8.822) (layer Edge.Cuts) (width 0.1))

        ${"" /* Battery + */}
        (pad "" thru_hole circle (at ${pos_left}4.445 -0.317) (size 1.4 1.4) (drill 1) (layers *.Cu *.Mask) ${
      p.BATP.str
    })
        (fp_line (start ${pos_left}4.195 -2.472) (end ${pos_left}2.032 -2.472) (layer Edge.Cuts) (width 0.1))
        (fp_line (start ${pos_left}2.032 -2.472) (end ${pos_left}2.032 -0.067) (layer Edge.Cuts) (width 0.1))
        (fp_line (start ${pos_left}2.032 -0.067) (end ${pos_left}4.195 -0.067) (layer Edge.Cuts) (width 0.1))
        (fp_line (start ${pos_left}4.195 -0.067) (end ${pos_left}4.195 -0.567) (layer Edge.Cuts) (width 0.1))
        (fp_line (start ${pos_left}4.195 -0.567) (end ${pos_left}4.695 -0.567) (layer Edge.Cuts) (width 0.1))
        (fp_line (start ${pos_left}4.695 -0.567) (end ${pos_left}4.695 -1.972) (layer Edge.Cuts) (width 0.1))
        (fp_line (start ${pos_left}4.695 -1.972) (end ${pos_left}4.195 -1.972) (layer Edge.Cuts) (width 0.1))
        (fp_line (start ${pos_left}4.195 -1.972) (end ${pos_left}4.195 -2.472) (layer Edge.Cuts) (width 0.1))
      `;

    const battery_minus = `
        ${"" /* Battery - */}
        (pad "" thru_hole circle (at ${pos_left}4.445 -2.222) (size 1.4 1.4) (drill 1) (layers *.Cu *.Mask) ${
      p.BATN.str
    })
      `;

    const holes = `
        ${`` /* Pin holes */}
        (pad "" thru_hole circle (at ${pos_left}7.62 -7.62) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${
      p.P0.str
    })
        (pad "" thru_hole circle (at ${pos_left}7.62 -5.08) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${
      p.P1.str
    })
        (pad "" thru_hole circle (at ${pos_left}7.62 -2.54) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${
      p.P2.str
    })
        (pad "" thru_hole circle (at ${pos_left}7.62 0) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${
      p.P3.str
    })
        (pad "" thru_hole circle (at ${pos_left}7.62 2.54) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${
      p.P4.str
    })
        (pad "" thru_hole circle (at ${pos_left}7.62 5.08) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${
      p.P5.str
    })
        (pad "" thru_hole circle (at ${pos_left}7.62 7.62) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${
      p.P6.str
    })

        (pad "" thru_hole circle (at ${pos_right}7.62 7.62) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${
      p.P7.str
    })
        (pad "" thru_hole circle (at ${pos_right}7.62 5.08) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${
      p.P8.str
    })
        (pad "" thru_hole circle (at ${pos_right}7.62 2.54) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${
      p.P9.str
    })
        (pad "" thru_hole circle (at ${pos_right}7.62 0) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${
      p.P10.str
    })
        (pad "" thru_hole circle (at ${pos_right}7.62 -2.54) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${
      p.RAW3V3.str
    })
        (pad "" thru_hole circle (at ${pos_right}7.62 -5.08) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${
      p.GND.str
    })
        (pad "" thru_hole circle (at ${pos_right}7.62 -7.62) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${
      p.RAW5V.str
    })
      `;

    const dio = `
        ${"" /* Dio & Clk */}
        (pad "" thru_hole circle (at ${pos_left}1.27 -8.573) (size 1.4 1.4) (drill 1) (layers *.Cu *.Mask) ${
      p.DIO.str
    })
        (pad "" thru_hole circle (at ${pos_right}1.27 -8.573) (size 1.4 1.4) (drill 1) (layers *.Cu *.Mask) ${
      p.CLK.str
    })
      `;

    const nfc = `
        ${"" /* NFC  */}
        (pad "" thru_hole circle (at ${pos_right}3.8 8.8) (size 1.4 1.4) (drill 1) (layers *.Cu *.Mask) ${
      p.NFC0.str
    })
        (pad "" thru_hole circle (at ${pos_right}5.7 8.8) (size 1.4 1.4) (drill 1) (layers *.Cu *.Mask) ${
      p.NFC1.str
    })
        (fp_line (start ${pos_right}3.6 6.388) (end ${pos_right}5.9 6.388) (layer Edge.Cuts) (width 0.1))
        (fp_line (start ${pos_right}5.9 6.388) (end ${pos_right}5.9 8.5) (layer Edge.Cuts) (width 0.1))
        (fp_line (start ${pos_right}5.9 8.5) (end ${pos_right}5.4 8.5) (layer Edge.Cuts) (width 0.1))
        (fp_line (start ${pos_right}5.4 8.5) (end ${pos_right}5.4 9) (layer Edge.Cuts) (width 0.1))
        (fp_line (start ${pos_right}5.4 9) (end ${pos_right}4.1 9) (layer Edge.Cuts) (width 0.1))
        (fp_line (start ${pos_right}4.1 9) (end ${pos_right}4.1 8.5) (layer Edge.Cuts) (width 0.1))
        (fp_line (start ${pos_right}4.1 8.5) (end ${pos_right}3.6 8.5) (layer Edge.Cuts) (width 0.1))
        (fp_line (start ${pos_right}3.6 8.5) (end ${pos_right}3.6 6.388) (layer Edge.Cuts) (width 0.1))
      `;

    const bottom = `
      )
    `;

    let final = top;

    if (p.battery_minus) {
      final += battery_minus;
    }

    if (p.holes) {
      final += holes;
    }

    if (p.dio) {
      final += dio;
    }

    if (p.nfc) {
      final += nfc;
    }

    final += bottom;

    return final;
  },
};
