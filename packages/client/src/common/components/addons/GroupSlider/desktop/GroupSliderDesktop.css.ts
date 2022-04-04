import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { hideScrollbar } from 'client/src/common/styles/shared/hideScrollbar.css'

export const wrapper = style([
  hideScrollbar,
  {
    overflow: 'hidden',
    overflowX: 'auto',
  },
])

export const box = gridAtom({ display: 'flex' })

export const header = style([
  gridAtom({ display: 'flex', alignItems: 'center' }),
  { marginBottom: dt.vars.space.s0 },
])

export const buttonsGroup = style([gridAtom({ display: 'flex' }), { marginLeft: 'auto' }])

export const prevButton = style({
  marginRight: dt.vars.space.s0,
})
