import { style } from '@vanilla-extract/css'

import { palette } from 'client/src/common/styles'

export const wrapper = style({
  cursor: 'pointer',
})

export const active = style({
  background: palette.color.accentLight,
})
