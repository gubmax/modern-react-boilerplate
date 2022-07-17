import { style, styleVariants } from '@vanilla-extract/css'

import { adaptiveVarsContract } from '../adaptive.css'

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
      fontSize: adaptiveVarsContract.fontSize.h1,
      fontWeight: 500,
      letterSpacing: 0.25,
    },
  ],
  h2: [
    heading,
    {
      fontSize: adaptiveVarsContract.fontSize.h2,
      fontWeight: 500,
      letterSpacing: 0,
    },
  ],
  h3: [
    heading,
    {
      fontSize: adaptiveVarsContract.fontSize.h3,
      letterSpacing: 0.15,
    },
  ],
  subtitle1: { fontSize: adaptiveVarsContract.fontSize.subtitle1, lineHeight: 1.5 },
  body1: { fontSize: adaptiveVarsContract.fontSize.body1 },
  body2: { fontSize: adaptiveVarsContract.fontSize.body2 },
})
