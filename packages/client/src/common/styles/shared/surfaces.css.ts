import { styleVariants } from '@vanilla-extract/css'

import { dt } from '../designTokens'

export const surfaces = styleVariants(
  {
    flat: { background: dt.vars.theme.color.surface0 },
    glass: {
      background: dt.vars.theme.color.transparentBg0,
      backdropFilter: 'blur(0.5rem)',
    },
    outline: { boxShadow: `inset 0 0 0 0.1rem ${dt.vars.theme.color.border}` },
  },
  'surfaces',
)
