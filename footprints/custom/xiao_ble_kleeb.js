// Seeduino XIAO BLE THT
// https://wiki.seeedstudio.com/XIAO_BLE/
// https://github.com/crides/kleeb/blob/master/mcu.pretty/xiao-ble-tht.kicad_mod
module.exports = {
  params: {
    _5V: { type: "net", value: "5V" },
    GND: { type: "net", value: "GND" },
    _3V3: { type: "net", value: "3V3" },
    D0: { type: "net", value: "D0" },
    D1: { type: "net", value: "D1" },
    D2: { type: "net", value: "D2" },
    D3: { type: "net", value: "D3" },
    D4: { type: "net", value: "D4" },
    D5: { type: "net", value: "D5" },
    D6: { type: "net", value: "D6" },
    D7: { type: "net", value: "D7" },
    D8: { type: "net", value: "D8" },
    D9: { type: "net", value: "D9" },
    D10: { type: "net", value: "D10" },
    DIO: { type: "net", value: "DIO" },
    CLK: { type: "net", value: "CLK" },
    RST: { type: "net", value: "RST" },
    BATP: { type: "net", value: "BATP" },
    BATN: { type: "net", value: "BATN" },
    NFC: { type: "net", value: "NFC" },
  },
  body: (p) => `
    (module "xiao-ble-tht"
      (layer "F.Cu")
      ${p.at /* parametric position */}
      (attr smd exclude_from_pos_files)
      (fp_rect (start -8.89 10.5) (end 8.89 -10.5) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp 116e44aa-10c6-4541-8b90-5b7a2f5434bd))
      (fp_rect (start 3.350197 -6.785813) (end 5.128197 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp a1111a45-eeef-42a4-8ca2-b88859685c82))
      (fp_rect (start -3.507811 -8.182813) (end -5.285811 -10.849813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp a6f271d5-ba8a-454d-80cb-5f2f863f2343))
      (fp_rect (start 3.350197 -10.849813) (end 5.128197 -8.182813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp bb88374b-bed5-4557-ac17-b524808b3664))
      (fp_rect (start -5.285811 -6.785813) (end -3.507811 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp f5248a36-36cb-4bf1-a463-d1ff91adf3ac))
      (pad "1" thru_hole oval (at -7.62 -7.62 ${
        p.rot
      }) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${
    p.D0.str
  })
      (pad "2" thru_hole oval (at -7.62 -5.08 ${
        p.rot
      }) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${
    p.D1.str
  })
      (pad "3" thru_hole oval (at -7.62 -2.54 ${
        p.rot
      }) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${
    p.D2.str
  })
      (pad "4" thru_hole oval (at -7.62 0 ${
        p.rot
      }) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${
    p.D3.str
  })
      (pad "5" thru_hole oval (at -7.62 2.54 ${
        p.rot
      }) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${
    p.D4.str
  })
      (pad "6" thru_hole oval (at -7.62 5.08 ${
        p.rot
      }) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${
    p.D5.str
  })
      (pad "7" thru_hole oval (at -7.62 7.62 ${
        p.rot
      }) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${
    p.D6.str
  })
      (pad "8" thru_hole oval (at 7.62 7.62 ${
        p.rot + 180
      }) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${
    p.D7.str
  })
      (pad "9" thru_hole oval (at 7.62 5.08 ${
        p.rot + 180
      }) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${
    p.D8.str
  })
      (pad "10" thru_hole oval (at 7.62 2.54 ${
        p.rot + 180
      }) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${
    p.D9.str
  })
      (pad "11" thru_hole oval (at 7.62 0 ${
        p.rot + 180
      }) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${
    p.D10.str
  })
      (pad "12" thru_hole oval (at 7.62 -2.54 ${
        p.rot + 180
      }) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${
    p._3V3.str
  })
      (pad "13" thru_hole oval (at 7.62 -5.08 ${
        p.rot + 180
      }) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${
    p.GND.str
  })
      (pad "14" thru_hole oval (at 7.62 -7.62 ${
        p.rot + 180
      }) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${
    p._5V.str
  })
      (pad "15" thru_hole circle (at -1.27 -8.572 ${
        p.rot + 90
      }) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.DIO.str})
      (pad "16" thru_hole circle (at 1.27 -8.572 ${
        p.rot + 90
      }) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.CLK.str})
      (pad "17" thru_hole circle (at -1.27 -6.032 ${
        p.rot + 90
      }) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.RST.str})
      (pad "18" thru_hole circle (at 1.27 -6.032 ${
        p.rot + 90
      }) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.GND.str})
      (pad "19" thru_hole circle (at -4.445 -0.317 ${
        p.rot + 180
      }) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.BATP.str})
      (pad "20" thru_hole circle (at -4.445 -2.222 ${
        p.rot + 180
      }) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.BATN.str})
      (pad "21" thru_hole circle (at 3.81 9.208 ${
        p.rot + 180
      }) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.NFC.str})
      (pad "22" thru_hole circle (at 5.715 9.208 ${
        p.rot + 180
      }) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.NFC.str})
    )
    `,
};
