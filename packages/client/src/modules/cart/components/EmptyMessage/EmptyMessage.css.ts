import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'

export const wrapper = style([
  surfaces.outline,
  {
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    padding: dt.vars.space.s4,
    borderRadius: dt.vars.borderRadius.primary,
    color: dt.vars.theme.color.secondary,
  },
])

export const icon = style({
  userSelect: 'none',
})
