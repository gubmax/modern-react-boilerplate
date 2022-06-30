import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'

export const hint = style({
  color: dt.vars.theme.color.secondary,
})

export const count = style({
  fontWeight: 700,
})
