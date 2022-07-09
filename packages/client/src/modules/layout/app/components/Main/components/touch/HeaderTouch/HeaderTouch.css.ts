import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style({
  minWidth: dt.vars.size.screen.min,
  padding: `0 ${dt.vars.space.s1} ${dt.vars.space.s2}`,
  marginBottom: dt.vars.space.s3,
  borderBottom: `${dt.vars.border.width.regular} solid ${dt.vars.theme.color.border}`,
  background: dt.vars.theme.color.surface0,
})

export const header = style([
  gridAtom({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  {
    height: pxToRem(60),
  },
])

export const navigationMenu = style({
  justifySelf: 'flex-end',
  marginLeft: dt.vars.space.s4,
})
