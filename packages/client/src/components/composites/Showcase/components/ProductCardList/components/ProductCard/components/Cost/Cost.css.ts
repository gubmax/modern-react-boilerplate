import { style } from '@vanilla-extract/css'
import { vars, palette } from 'client/src/common/styles'

export const wrapper = style({
  background: palette.color.borderLight,
  padding: vars.space.s0,
})

export const count = style({
  fontWeight: 500,
})
