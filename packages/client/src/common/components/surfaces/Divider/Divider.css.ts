import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'

export const divider = style({
  height: dt.vars.border.width.regular,
  background: dt.vars.theme.color.borderLight,
  borderWidth: 0,
})
