import { style, styleVariants } from '@vanilla-extract/css'

import { dt } from '../designTokens'

const heading = style(
  {
    display: 'block',
    lineHeight: 1,
  },
  'heading',
)

export const typography = styleVariants({
  h1: [
    heading,
    {
      fontSize: dt.vars.fontSize.h1,
      fontWeight: 500,
      letterSpacing: 0.25,
    },
  ],
  h2: [
    heading,
    {
      fontSize: dt.vars.fontSize.h2,
      fontWeight: 500,
      letterSpacing: 0,
    },
  ],
  h3: [
    heading,
    {
      fontSize: dt.vars.fontSize.h3,
      letterSpacing: 0.15,
    },
  ],
  subtitle1: { fontSize: dt.vars.fontSize.subtitle1, lineHeight: 1.5 },
  body1: { fontSize: dt.vars.fontSize.body1 },
  body2: { fontSize: dt.vars.fontSize.body2 },
})
