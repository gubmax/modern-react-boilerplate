import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { dt } from '../designTokens'

export const focusBorderStyle = style({
  border: `${dt.vars.border.width.regular} solid transparent`,
  borderRadius: dt.vars.border.radius.regular,

  ':focus-visible': {
    boxShadow: `0 0 0 ${pxToRem(4)} ${dt.vars.theme.color.accentLight}`,
    borderColor: dt.vars.theme.color.accent,
  },
})
