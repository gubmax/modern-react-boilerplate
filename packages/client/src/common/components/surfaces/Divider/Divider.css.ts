import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { dt } from 'client/src/common/styles/designTokens'

export const divider = style({
  height: pxToRem(1.25),
  background: dt.vars.theme.color.borderLight,
  borderWidth: 0,
})
