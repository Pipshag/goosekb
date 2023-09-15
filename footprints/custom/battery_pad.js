module.exports = {
  params: {
    designator: "BAT",
    side: "F",
    pos: undefined,
    neg: undefined,
  },
  body: (p) => `

    (module BatteryPad (layer ${p.side}.Cu) (tedit 58D3FE32)

        ${p.at /* parametric position */}

        ${"" /* footprint reference */}
        (fp_text reference "${p.ref} 15 test" (at 0 0) (layer F.SilkS) ${
    p.ref_hide
  } (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "18 line" (at 0 0) (layer ${
          p.side
        }.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))


        (fp_line (start -2.1 -0.25) (end -2.1 0.25) (layer ${
          p.side
        }.SilkS) (width 0.15))
        (fp_line (start -1.85 0) (end -2.35 0) (layer ${
          p.side
        }.SilkS) (width 0.15))

        (pad 1 thru_hole rect (at -1 0 ${
          p.rot
        }) (size 1.2 1.7) (drill 0.75) (layers *.Cu *.Mask) ${p.pos.str})
        (pad 2 thru_hole oval (at 1 0 ${
          p.rot
        }) (size 1.2 1.7) (drill 0.75) (layers *.Cu *.Mask) ${p.neg.str})

    )

    `,
};
