import { style } from '@vanilla-extract/css'

import { theme } from 'src/styles'

export const wrapper = style({
  cursor: 'pointer',
})

export const active = style({
  color: theme.color.accent,
})
