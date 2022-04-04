import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'

export const wrapper = style([
  surfaces.base,
  {
    cursor: 'pointer',
  },
])

export const active = style({
  background: dt.vars.theme.color.accentLight,
})
