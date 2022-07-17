import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style([
  dt.style.surfaces.outline,
  {
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    padding: dt.vars.space.s4,
    borderRadius: dt.vars.border.radius.regular,
    color: dt.vars.theme.color.secondary,
  },
])

export const icon = style({
  userSelect: 'none',
})
