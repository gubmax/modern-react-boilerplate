import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style([
  gridAtom({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  {
    height: pxToRem(60),
  },
])

export const search = style({
  marginBottom: dt.vars.space.s3,
})

export const navigationMenu = style({
  justifySelf: 'flex-end',
  marginLeft: dt.vars.space.s4,
})
