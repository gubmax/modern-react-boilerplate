import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'
import { typography } from 'client/src/common/styles/shared/typography.css'

export const hint = style([
  typography.subtitle1,
  {
    color: dt.vars.theme.color.secondary,
  },
])

export const count = style([
  typography.subtitle1,
  {
    fontWeight: 700,
  },
])
