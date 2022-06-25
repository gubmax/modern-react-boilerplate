import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  padding: `${dt.vars.space.s1} ${dt.vars.space.s2}`,
  whiteSpace: 'nowrap',
  color: dt.vars.theme.color.secondary,
  fontWeight: 500,
})

export const wrapperActive = style({
  background: dt.vars.theme.color.surface0,
  color: dt.vars.theme.color.primary,
})

export const icon = style({
  flexShrink: 0,
})

export const text = style({
  marginLeft: dt.vars.space.s1,
})
