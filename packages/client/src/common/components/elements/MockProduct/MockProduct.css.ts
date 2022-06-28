import { style } from '@vanilla-extract/css'

import { gridAtom } from 'client/src/common/styles/atomic/grid.css'

const bg = style([
  gridAtom({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  {
    width: '100%',
    height: '100%',
  },
])

const icon = style({
  width: '75%',
  height: '75%',
})

export const productCardBg0 = style([bg, { backgroundColor: '#ffadad' }])
export const productCardBg1 = style([bg, { backgroundColor: '#ffd6a5' }])
export const productCardBg2 = style([bg, { backgroundColor: '#fdffb6' }])
export const productCardBg3 = style([bg, { backgroundColor: '#caffbf' }])
export const productCardBg4 = style([bg, { backgroundColor: '#9bf6ff' }])
export const productCardBg5 = style([bg, { backgroundColor: '#a0c4ff' }])
export const productCardBg6 = style([bg, { backgroundColor: '#bdb2ff' }])
export const productCardBg7 = style([bg, { backgroundColor: '#ffc6ff' }])

export const productCardIcon0 = style([icon, { fill: '#ff9494' }])
export const productCardIcon1 = style([icon, { fill: '#ffc37a' }])
export const productCardIcon2 = style([icon, { fill: '#e9ec93' }])
export const productCardIcon3 = style([icon, { fill: '#a7f098' }])
export const productCardIcon4 = style([icon, { fill: '#75e5f0' }])
export const productCardIcon5 = style([icon, { fill: '#80b0ff' }])
export const productCardIcon6 = style([icon, { fill: '#a899ff' }])
export const productCardIcon7 = style([icon, { fill: '#ffa8ff' }])
