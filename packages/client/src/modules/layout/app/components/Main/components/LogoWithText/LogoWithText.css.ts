import { style } from '@vanilla-extract/css'

import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'

export const text = style([
  dt.style.focusVisible.primary,
  dt.style.typography.h2,
  gridAtom({ display: 'inline-flex', alignItems: 'center' }),
  {
    marginLeft: `calc(-1 * ${dt.vars.space.s0})`,
    padding: dt.vars.space.s1,
    whiteSpace: 'nowrap',
    borderRadius: dt.vars.border.radius.regular,
  },
])

export const title = style({
  display: 'none',

  '@media': {
    [dt.media.minWidth.tablet]: {
      display: 'unset',
      marginLeft: dt.vars.space.s1,
    },
  },
})
