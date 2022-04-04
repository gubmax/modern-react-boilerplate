import { style } from '@vanilla-extract/css'
import { dt } from 'client/src/common/styles/designTokens'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'

export const wrapper = style([
  surfaces.base,
  {
    background: dt.vars.theme.color.borderLight,
    padding: dt.vars.space.s0,
  },
])

export const count = style({
  fontWeight: 500,
})
