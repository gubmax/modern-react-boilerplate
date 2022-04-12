import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  height: pxToRem(46),
  padding: `0 ${dt.vars.space.s2}`,
  whiteSpace: 'nowrap',

  ':last-child': { marginBottom: 0 },
})

export const wrapperActive = style({
  background: dt.vars.theme.color.surface0,
})

export const icon = style({
  flexShrink: 0,
})

export const text = style({
  marginLeft: dt.vars.space.s1,
})
