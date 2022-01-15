import { style } from '@vanilla-extract/css'

import { vars } from 'client/src/common/styles'

export const wrapper = style({
  maxWidth: '44rem',
})

export const list = style({
  marginBottom: vars.space.s2,
})
