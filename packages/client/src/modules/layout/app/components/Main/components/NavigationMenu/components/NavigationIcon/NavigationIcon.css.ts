import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style([
  dt.style.focusVisible.primary,
  gridAtom({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  {
    height: pxToRem(56),
    padding: `0 ${dt.vars.space.s0}`,
    borderRadius: dt.vars.border.radius.regular,
    cursor: 'pointer',
  },
])

export const text = style({
  whiteSpace: 'nowrap',
  marginTop: pxToRem(3),
  fontSize: dt.vars.fontSize.body2,
})
