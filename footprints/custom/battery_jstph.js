// JST PH series connector
// S2B-PH-K, side entry type, through hole
// http://www.jst-mfg.com/product/pdf/eng/ePH.pdf
// reverisble
module.exports = {
  params: {
    pos: undefined,
    neg: undefined,
  },
  body: (p) => `

    (module JST_PH_S2B-PH-K_02x2.00mm_Angled (layer F.Cu) (tedit 58D3FE32)

        ${p.at /* parametric position */}
        (pad 1 thru_hole oval (at -2 0 ${
          p.rot
        }) (size 1.2 1.7) (drill 0.75) (layers *.Cu *.Mask) ${p.neg.str})
        (pad 2 thru_hole rect (at 0 0 ${
          p.rot
        }) (size 1.2 1.7) (drill 0.75) (layers *.Cu *.Mask) ${p.pos.str})
        (pad 3 thru_hole oval (at 2 0 ${
          p.rot
        }) (size 1.2 1.7) (drill 0.75) (layers *.Cu *.Mask) ${p.neg.str})

    )

    `,
};
