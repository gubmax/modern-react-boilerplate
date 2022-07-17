import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'

export const title = style([
  dt.style.typography.body2,
  {
    display: 'block',
    marginLeft: dt.vars.space.s2,
    marginBottom: dt.vars.space.s0,
    color: dt.vars.theme.color.secondary,
    fontWeight: 500,
    textTransform: 'uppercase',
  },
])
