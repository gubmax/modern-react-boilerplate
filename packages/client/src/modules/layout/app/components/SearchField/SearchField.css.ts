import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'

export const wrapper = style([
  gridAtom({ display: 'flex', alignItems: 'center' }),
  { position: 'relative', width: '100%' },
])

export const field = style({
  padding: `0 ${pxToRem(42)}`,
})

export const searchIcon = style({
  position: 'absolute',
  pointerEvents: 'none',
  left: pxToRem(2),
})

export const resetIcon = style({
  position: 'absolute',
  right: pxToRem(2),
})
