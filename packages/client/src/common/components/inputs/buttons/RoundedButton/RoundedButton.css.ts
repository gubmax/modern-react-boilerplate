import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { dt } from 'client/src/common/styles/designTokens'

export const rounded = style({
  width: pxToRem(42),
  minWidth: pxToRem(42),
  fontSize: dt.vars.fontSize.h3,
  borderRadius: '50%',
})
