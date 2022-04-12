import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style({
  background: dt.vars.theme.color.borderLight,
  padding: dt.vars.space.s0,
  borderRadius: dt.vars.borderRadius.primary,
})

export const count = style({
  fontWeight: 500,
})
