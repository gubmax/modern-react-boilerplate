import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'

export const wrapper = style([
  surfaces.glass,
  gridAtom({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  {
    height: pxToRem(70),
  },
])

export const search = style({
  maxWidth: pxToRem(380),
})

export const navigationMenu = style({
  justifySelf: 'flex-end',
  marginLeft: dt.vars.space.s4,
})
