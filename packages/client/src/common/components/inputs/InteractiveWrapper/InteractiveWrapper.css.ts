import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style({
  cursor: 'pointer',
  borderRadius: dt.vars.borderRadius.primary,
})

export const active = style({
  background: dt.vars.theme.color.accentLight,
})
