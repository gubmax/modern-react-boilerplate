import { style } from '@vanilla-extract/css'

import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style([
  dt.style.surfaces.glass,
  gridAtom({
    display: 'flex',
    justifyContent: 'space-around',
  }),
  {
    padding: `${dt.vars.space.s0} ${dt.vars.space.s1}`,
    borderTop: `${dt.vars.border.width.regular} solid ${dt.vars.theme.color.border}`,
  },
])

export const text = style({
  display: 'none',
  marginLeft: dt.vars.space.s1,
})

export const listItem = gridAtom({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
})
