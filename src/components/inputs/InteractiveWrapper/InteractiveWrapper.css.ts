import { style } from '@vanilla-extract/css'

import { cssThemeVars } from 'src/styles'

export const wrapper = style({
  cursor: 'pointer',
})

export const active = style({
  color: cssThemeVars.color.accent,
})
