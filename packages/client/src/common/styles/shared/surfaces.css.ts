import { style, styleVariants } from '@vanilla-extract/css'

import { vars } from '../vars.css'
import { palette } from '../palette.css'

const base = style({
  padding: `${vars.space.s2} ${vars.space.s3}`,
  borderRadius: vars.borderRadius.primary,
})

export const surfaces = styleVariants(
  {
    base: [base],
    flat: [
      base,
      {
        background: palette.color.surface0,
        borderRadius: vars.borderRadius.primary,
      },
    ],
    glass: [
      base,
      {
        background: palette.color.transparentBg0,
        backdropFilter: 'blur(0.5rem)',
      },
    ],
    outline: [
      base,
      {
        boxShadow: `inset 0 0 0 0.1rem ${palette.color.border}`,
      },
    ],
  },
  'surfaces',
)
