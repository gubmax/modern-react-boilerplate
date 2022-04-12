import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'

export const wrapper = style([
  surfaces.glass,
  {
    display: 'flex',
    justifyContent: 'space-around',
    padding: dt.vars.space.s1,
    borderTop: `1px solid ${dt.vars.theme.color.borderLight}`,
    borderRadius: `${dt.vars.borderRadius.primary} ${dt.vars.borderRadius.primary} 0 0`,
  },
])

export const text = style({
  display: 'none',
  marginLeft: dt.vars.space.s1,
})

export const listItem = style({
  display: 'flex',
  alignItems: 'center',
  padding: dt.vars.space.s1,

  ':last-child': { marginBottom: 0 },
})

export const routeIcon = style({
  flexShrink: 0,
})
