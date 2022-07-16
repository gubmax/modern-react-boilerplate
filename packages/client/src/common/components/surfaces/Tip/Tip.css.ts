import { style } from '@vanilla-extract/css'

import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style([
  gridAtom({
    display: 'flex',
    alignItems: 'center',
  }),
  {
    padding: `${dt.vars.space.s1} ${dt.vars.space.s2}`,
    background: dt.vars.theme.color.accentLight,
    color: dt.vars.theme.color.accent,
    border: `${dt.vars.border.width.regular} solid ${dt.vars.theme.color.accent}`,
    borderRadius: dt.vars.border.radius.regular,
  },
])

export const icon = style([
  gridAtom({
    flexShrink: 0,
    alignSelf: 'flex-start',
  }),
  {
    marginRight: dt.vars.space.s0,
  },
])
