import { style } from '@vanilla-extract/css'
import { vars, palette } from 'client/src/common/styles'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'

export const wrapper = style([
  surfaces.base,
  {
    background: palette.color.borderLight,
    padding: vars.space.s0,
  },
])

export const count = style({
  fontWeight: 500,
})
