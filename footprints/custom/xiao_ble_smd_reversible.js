// Seeduino XIAO BLE THT
// https://wiki.seeedstudio.com/XIAO_BLE/
// https://github.com/crides/kleeb/blob/master/mcu.pretty/xiao-ble-tht.kicad_mod 
module.exports = {
  params: {
    designator: 'MCU',
    D0: {type: 'net', value: 'D0'},
    D1: {type: 'net', value: 'D1'},
    D2: {type: 'net', value: 'D2'},
    D3: {type: 'net', value: 'D3'},
    D4: {type: 'net', value: 'D4'},
    D5: {type: 'net', value: 'D5'},
    D6: {type: 'net', value: 'D6'},
    D7: {type: 'net', value: 'D7'},
    D8: {type: 'net', value: 'D8'},
    D9: {type: 'net', value: 'D9'},
    D10: {type: 'net', value: 'D10'},
    _3V3: {type: 'net', value: '3V3'},
    GND: {type: 'net', value: 'GND'},
    _5V: {type: 'net', value: '5V'},
    RST: {type: 'net', value: 'RST'},
    BATP: {type: 'net', value: 'BAT+'}
  },
  body: p => `
    (module "xiao-ble-smd-reversible"
      (layer "F.Cu")
      ${p.at /* parametric position */}
      (attr smd exclude_from_pos_files)

      ${"" /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${
      p.ref_hide
    } (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      (fp_rect (start -3.350197 -6.785813) (end -5.128197 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp 06bccb0b-2f4b-4092-834b-3871294199da))
      (fp_rect (start 3.350197 -6.785813) (end 5.128197 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp 2415f537-fa6d-4c04-bd97-00b9f7ab939d))
      (fp_rect (start 3.507811 -8.182813) (end 5.285811 -10.849813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp 32a2f93b-16df-4770-bc80-527fdb2ae15f))
      (fp_rect (start -3.350197 -10.849813) (end -5.128197 -8.182813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp 4f5c185a-e11b-4d82-a8bc-b9689c9c633b))
      (fp_rect (start 3.350197 -10.849813) (end 5.128197 -8.182813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp 5b77bfad-fdd5-4e7d-86ed-ad21fd1ee4e0))
      (fp_rect (start -5.285811 -6.785813) (end -3.507811 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp 6a787b26-86fe-4c4f-b92f-6381c95ee933))
      (fp_rect (start 8.89 10.5) (end -8.89 -10.5) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp 73cb09ad-e380-49f3-bc9d-038b1104bc93))
      (fp_rect (start -8.89 10.5) (end 8.89 -10.5) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp 98155800-78e7-48e2-b416-a5948d22b132))
      (fp_rect (start -3.507811 -8.182813) (end -5.285811 -10.849813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp d6707dd1-1c60-4d7e-8bf8-d81571e173bf))
      (fp_rect (start 5.285811 -6.785813) (end 3.507811 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp e701a39e-8bd3-440b-8d4a-26c336209834))

      (fp_rect (start -8.89 10.5) (end 8.89 -10.5)
        (stroke (width 0.12) (type solid)) (fill none) (layer "Dwgs.User") (tstamp 98155800-78e7-48e2-b416-a5948d22b132))
      (fp_rect (start -5.285811 -6.785813) (end -3.507811 -4.118813)
        (stroke (width 0.12) (type solid)) (fill none) (layer "Dwgs.User") (tstamp 6a787b26-86fe-4c4f-b92f-6381c95ee933))
      (fp_rect (start -3.507811 -8.182813) (end -5.285811 -10.849813)
        (stroke (width 0.12) (type solid)) (fill none) (layer "Dwgs.User") (tstamp d6707dd1-1c60-4d7e-8bf8-d81571e173bf))
      (fp_rect (start -3.350197 -10.849813) (end -5.128197 -8.182813)
        (stroke (width 0.12) (type solid)) (fill none) (layer "Dwgs.User") (tstamp 4f5c185a-e11b-4d82-a8bc-b9689c9c633b))
      (fp_rect (start -3.350197 -6.785813) (end -5.128197 -4.118813)
        (stroke (width 0.12) (type solid)) (fill none) (layer "Dwgs.User") (tstamp 06bccb0b-2f4b-4092-834b-3871294199da))
      (fp_rect (start 3.350197 -10.849813) (end 5.128197 -8.182813)
        (stroke (width 0.12) (type solid)) (fill none) (layer "Dwgs.User") (tstamp 5b77bfad-fdd5-4e7d-86ed-ad21fd1ee4e0))
      (fp_rect (start 3.350197 -6.785813) (end 5.128197 -4.118813)
        (stroke (width 0.12) (type solid)) (fill none) (layer "Dwgs.User") (tstamp 2415f537-fa6d-4c04-bd97-00b9f7ab939d))
      (fp_rect (start 3.507811 -8.182813) (end 5.285811 -10.849813)
        (stroke (width 0.12) (type solid)) (fill none) (layer "Dwgs.User") (tstamp 32a2f93b-16df-4770-bc80-527fdb2ae15f))
      (fp_rect (start 5.285811 -6.785813) (end 3.507811 -4.118813)
        (stroke (width 0.12) (type solid)) (fill none) (layer "Dwgs.User") (tstamp e701a39e-8bd3-440b-8d4a-26c336209834))
      (fp_rect (start 8.89 10.5) (end -8.89 -10.5)
        (stroke (width 0.12) (type solid)) (fill none) (layer "Dwgs.User") (tstamp 73cb09ad-e380-49f3-bc9d-038b1104bc93))
      (fp_rect (start -4.75 -0.25) (end -2.35 1.25)
        (stroke (width 0.05) (type default)) (fill none) (layer "Edge.Cuts") (tstamp 724d0c56-5476-429f-ac61-6c9856d610a8))
      (fp_rect (start -1.7 -6) (end 1.7 -4.5)
        (stroke (width 0.05) (type default)) (fill none) (layer "Edge.Cuts") (tstamp 896c3b8d-9f11-471d-ad6e-be0ffb5264b9))
      (fp_rect (start 2.35 -0.25) (end 4.75 1.25)
        (stroke (width 0.05) (type default)) (fill none) (layer "Edge.Cuts") (tstamp 2d16504a-3eb6-4b73-a511-2febd5a0fc1f))

      (pad "1" smd oval (at 8.56996 -7.62 180) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D0.str})
      (pad "1" smd oval (at -8.56996 -7.62 180) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D0.str})
      (pad "2" smd oval (at -8.56996 -5.08 180) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D1.str})
      (pad "2" smd oval (at 8.56996 -5.08 180) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D1.str})
      (pad "3" smd oval (at -8.56996 -2.54 180) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D2.str})
      (pad "3" smd oval (at 8.56996 -2.54 180) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D2.str})
      (pad "4" smd oval (at 8.56996 0 180) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D3.str})
      (pad "4" smd oval (at -8.56996 0 180) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D3.str})
      (pad "5" smd oval (at -8.56996 2.54 180) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D4.str})
      (pad "5" smd oval (at 8.56996 2.54 180) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D4.str})
      (pad "6" smd oval (at 8.56996 5.08 180) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D5.str})
      (pad "6" smd oval (at -8.56996 5.08 180) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D5.str})
      (pad "7" smd oval (at 8.56996 7.62 180) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D6.str})
      (pad "7" smd oval (at -8.56996 7.62 180) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D6.str})
      (pad "8" smd oval (at 8.56996 7.62) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D7.str})
      (pad "8" smd oval (at -8.56996 7.62) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D7.str})
      (pad "9" smd oval (at -8.56996 5.08) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D8.str})
      (pad "9" smd oval (at 8.56996 5.08) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D8.str})
      (pad "10" smd oval (at -8.56996 2.54) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D9.str})
      (pad "10" smd oval (at 8.56996 2.54) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D9.str})
      (pad "11" smd oval (at 8.56996 0) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D10.str})
      (pad "11" smd oval (at -8.56996 0) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D10.str})
      (pad "12" smd oval (at -8.56996 -2.54) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p._3V3.str})
      (pad "12" smd oval (at 8.56996 -2.54) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p._3V3.str})
      (pad "13" smd oval (at 8.56996 -5.08) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.GND.str})
      (pad "13" smd oval (at -8.56996 -5.08) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.GND.str})
      (pad "14" smd oval (at -8.56996 -7.62) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p._5V.str})
      (pad "14" smd oval (at 8.56996 -7.62) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p._5V.str})
      (pad "17" thru_hole circle (at -1.27 -6.032 90) (size 1.397 1.397) (drill 1.016) (property pad_prop_castellated) (layers *.Cu *.Mask) ${p.GND.str})
      (pad "18" thru_hole circle (at 1.27 -6.032 270) (size 1.397 1.397) (drill 1.016) (property pad_prop_castellated) (layers *.Cu *.Mask) ${p.RST.str})
      (pad "19" thru_hole circle (at 4.445 -0.317 180) (size 1.397 1.397) (drill 1.016) (property pad_prop_castellated) (layers *.Cu *.Mask) ${p.BATP.str})
      (pad "19" thru_hole circle (at -4.445 -0.317 180) (size 1.397 1.397) (drill 1.016) (property pad_prop_castellated) (layers *.Cu *.Mask) ${p.BATP.str})
    )
    `
}
   

      // (fp_line (start -1.27 -2.984) (end 1.27 -2.984) (layer "Edge.Cuts") (width 0.12) (tstamp 2dd9a5be-3aa9-4cf6-850b-b3df04cedb00))
      // (fp_line (start -1.778 -6.032) (end -1.778 -3.492) (layer "Edge.Cuts") (width 0.12) (tstamp 56ff2288-13d4-4098-a5c7-84a24b2613d1))
      // (fp_line (start 4.953 -0.317) (end 4.953 2.223) (layer "Edge.Cuts") (width 0.12) (tstamp 5b55646c-afd9-4127-85d7-7d899753820b))
      // (fp_line (start -2.921 2.731) (end -4.445 2.731) (layer "Edge.Cuts") (width 0.12) (tstamp 5d82a0b1-5c8e-42d0-8222-7c4b7e42e518))
      // (fp_line (start 2.921 2.731) (end 4.445 2.731) (layer "Edge.Cuts") (width 0.12) (tstamp 77da69f1-4a7e-4daf-b100-27fb75871e8c))
      // (fp_line (start -2.921 -0.317) (end -4.953 -0.317) (layer "Edge.Cuts") (width 0.12) (tstamp 836c1b72-6495-4f81-a125-58f0f7d787c2))
      // (fp_line (start -4.953 -0.317) (end -4.953 2.223) (layer "Edge.Cuts") (width 0.12) (tstamp b0c1f62a-b351-48b8-ac88-59c1c4ffa2ff))
      // (fp_line (start 2.413 0.191) (end 2.413 2.223) (layer "Edge.Cuts") (width 0.12) (tstamp c9549976-7e08-4d60-8899-3ba07e9939f9))
      // (fp_line (start 2.921 -0.317) (end 4.953 -0.317) (layer "Edge.Cuts") (width 0.12) (tstamp e48c2411-8cec-4a56-a964-fc311cc46655))
      // (fp_line (start -2.413 0.191) (end -2.413 2.223) (layer "Edge.Cuts") (width 0.12) (tstamp ec620b77-8919-4285-a6c0-f21b0acac14b))
      // (fp_line (start 1.778 -6.032) (end 1.778 -3.492) (layer "Edge.Cuts") (width 0.12) (tstamp f930fa91-6adf-4e04-b42b-e0932fc06543))
      // (fp_line (start -1.778 -6.032) (end 1.778 -6.032) (layer "Edge.Cuts") (width 0.12) (tstamp fb07492c-d4ca-4a78-b92a-c3b14ed44b3f))
      // (fp_arc (start 1.778 -3.492) (mid 1.62921 -3.13279) (end 1.27 -2.984) (layer "Edge.Cuts") (width 0.12) (tstamp 2e7f3dd4-50ff-427a-80eb-8563e69a085c))
      // (fp_arc (start 2.921 2.731) (mid 2.56179 2.58221) (end 2.413 2.223) (layer "Edge.Cuts") (width 0.12) (tstamp 3ea03728-7a77-4313-bf8a-27a007c9d6a6))
      // (fp_arc (start -2.921 -0.317) (mid -2.56179 -0.16821) (end -2.413 0.191) (layer "Edge.Cuts") (width 0.12) (tstamp 65fd9534-1b91-42a6-8ecd-7a42d8ae4ade))
      // (fp_arc (start -4.445 2.731) (mid -4.80421 2.58221) (end -4.953 2.223) (layer "Edge.Cuts") (width 0.12) (tstamp 70852beb-7102-4701-922b-9248dc6321b9))
      // (fp_arc (start 2.413 0.191) (mid 2.56179 -0.16821) (end 2.921 -0.317) (layer "Edge.Cuts") (width 0.12) (tstamp 86bba780-a183-42d2-86e6-b1ca627942a1))
      // (fp_arc (start -1.27 -2.984) (mid -1.62921 -3.13279) (end -1.778 -3.492) (layer "Edge.Cuts") (width 0.12) (tstamp 888c6fdf-c198-440a-97af-035b863dc875))
      // (fp_arc (start -2.413 2.223) (mid -2.56179 2.58221) (end -2.921 2.731) (layer "Edge.Cuts") (width 0.12) (tstamp a8e78b6b-5175-49a4-b7f2-c08b88186745))
      // (fp_arc (start 4.953 2.223) (mid 4.80421 2.58221) (end 4.445 2.731) (layer "Edge.Cuts") (width 0.12) (tstamp a99fd9b5-8940-4c26-9884-c49137a564b7))
