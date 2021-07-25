import { style } from '@vanilla-extract/css'
import { vars } from 'src/styles'

export const h1 = style({
  marginBottom: vars.space.primary,
  fontSize: vars.fontSize.h1,
  fontWeight: 'bold',
})

export const h2 = style({
  marginBottom: vars.space.secondary,
  fontSize: vars.fontSize.h2,
  fontWeight: 'bold',
})

export const h3 = style({
  fontSize: vars.fontSize.h3,
})
