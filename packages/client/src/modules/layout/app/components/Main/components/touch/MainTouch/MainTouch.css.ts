import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { dt } from 'client/src/common/styles/designTokens'

export const main = style({
  minWidth: dt.vars.size.screen.min,
  padding: `0 ${dt.vars.space.s1} ${pxToRem(80)}`,
  overflowX: 'hidden',
})

export const navigationMenu = style({
  position: 'fixed',
  right: 0,
  bottom: 0,
  left: 0,
})
