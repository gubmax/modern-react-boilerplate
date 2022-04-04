import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'

export const divider = style({
  height: '1px',
  background: dt.vars.theme.color.borderLight,
  borderWidth: 0,
})
