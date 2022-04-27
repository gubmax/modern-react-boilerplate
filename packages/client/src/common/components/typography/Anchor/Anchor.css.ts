import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { dt } from 'client/src/common/styles/designTokens'

export const link = style({
  borderBottom: `${pxToRem(1.25)} dashed ${dt.vars.theme.color.primary}`,
})
