import { style } from '@vanilla-extract/css'

import { cssCommonVars } from 'src/styles'

export const wrapper = style({
  maxWidth: '44rem',
})

export const list = style({
  marginBottom: cssCommonVars.space.secondary,
})

export const emptyCartBox = style({
  display: 'inline-block',
  textAlign: 'center',
})

export const cartIcon = style({
  fontSize: '8rem',
  userSelect: 'none',
})
