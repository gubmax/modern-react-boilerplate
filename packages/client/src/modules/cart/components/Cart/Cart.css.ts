import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style({
  maxWidth: pxToRem(620),
})

export const list = style({
  marginBottom: dt.vars.space.s2,
})
