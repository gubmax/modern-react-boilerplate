import { style } from '@vanilla-extract/css'

import { gridAtom, vars, hideScrollbar } from 'client/src/common/styles'

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
  { marginBottom: vars.space.s0 },
])

export const title = style({
  margin: 0,
})

export const buttonsGroup = style([gridAtom({ display: 'flex' }), { marginLeft: 'auto' }])

export const prevButton = style({
  marginRight: vars.space.s0,
})
