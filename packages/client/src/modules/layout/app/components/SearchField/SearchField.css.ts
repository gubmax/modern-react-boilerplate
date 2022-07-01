import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'

const PADDING = pxToRem(2)

export const wrapper = style([
  gridAtom({ display: 'flex', alignItems: 'center' }),
  { position: 'relative', width: '100%' },
])

export const field = style({
  padding: `0 ${pxToRem(42)}`,
})

export const searchIcon = style({
  width: '3rem',
  position: 'absolute',
  pointerEvents: 'none',
  left: PADDING,
})

export const resetIcon = style({
  position: 'absolute',
  right: PADDING,
})
