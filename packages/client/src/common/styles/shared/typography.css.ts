import { style, styleVariants } from '@vanilla-extract/css'

import { vars } from '../vars.css'

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
      fontSize: vars.fontSize.h1,
      fontWeight: 500,
      letterSpacing: 0.25,
    },
  ],
  h2: [
    heading,
    {
      fontSize: vars.fontSize.h2,
      fontWeight: 500,
      letterSpacing: 0,
    },
  ],
  h3: [
    heading,
    {
      fontSize: vars.fontSize.h3,
      letterSpacing: 0.15,
    },
  ],
  subtitle1: { fontSize: vars.fontSize.subtitle1 },
  body1: { fontSize: vars.fontSize.body1 },
  body2: { fontSize: vars.fontSize.body2 },
})
