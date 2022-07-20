import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style([
  dt.style.active,
  dt.style.focusVisible.primary,
  {
    cursor: 'pointer',
    borderRadius: dt.vars.border.radius.regular,
  },
])

export const active = style({
  background: dt.vars.theme.color.accentLight,
})
