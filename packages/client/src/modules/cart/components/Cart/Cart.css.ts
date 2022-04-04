import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style({
  maxWidth: '44rem',
})

export const list = style({
  marginBottom: dt.vars.space.s2,
})
