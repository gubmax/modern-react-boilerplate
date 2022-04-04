import { style, styleVariants } from '@vanilla-extract/css'

import { dt } from '../designTokens'

const base = style({
  padding: `${dt.vars.space.s2} ${dt.vars.space.s3}`,
  borderRadius: dt.vars.borderRadius.primary,
})

export const surfaces = styleVariants(
  {
    base: [base],
    flat: [
      base,
      {
        background: dt.vars.theme.color.surface0,
        borderRadius: dt.vars.borderRadius.primary,
      },
    ],
    glass: [
      base,
      {
        background: dt.vars.theme.color.transparentBg0,
        backdropFilter: 'blur(0.5rem)',
      },
    ],
    outline: [
      base,
      {
        boxShadow: `inset 0 0 0 0.1rem ${dt.vars.theme.color.border}`,
      },
    ],
  },
  'surfaces',
)
