import { style } from '@vanilla-extract/css'

import { vars } from 'client/src/common/styles'

export const wrapper = style({
  textAlign: 'center',
  padding: vars.space.s4,
})

export const text = style({
  margin: 0,
})

export const icon = style({
  userSelect: 'none',
})
