import { style } from '@vanilla-extract/css'
import { cssCommonVars } from 'src/styles'

export const h1 = style({
  marginBottom: cssCommonVars.space.primary,
  fontSize: cssCommonVars.fontSize.h1,
  fontWeight: 'bold',
})

export const h2 = style({
  marginBottom: cssCommonVars.space.secondary,
  fontSize: cssCommonVars.fontSize.h2,
  fontWeight: 'bold',
})

export const h3 = style({
  fontSize: cssCommonVars.fontSize.h3,
})
