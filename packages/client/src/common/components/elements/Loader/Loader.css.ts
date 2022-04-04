import { style, keyframes } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'

const borderRadius = style({ borderRadius: '50%' })

const spin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
})

export const spinner = style([
  borderRadius,
  {
    boxSizing: 'border-box',
    width: '44px',
    height: '44px',
    margin: 'auto',
    borderWidth: '3px',
    borderStyle: 'solid',
    borderColor: `transparent ${dt.vars.theme.color.accent}`,
    animation: `${spin} 0.65s infinite linear`,
  },
])

export const loader = style([
  borderRadius,
  gridAtom({ display: 'flex' }),
  { transform: 'translateZ(0)' },
])

export const spinnerSmall = style({
  width: '20px',
  height: '20px',
  borderWidth: '2px',
})

export const spinnerSecondary = style({
  borderRightColor: dt.vars.theme.color.bg0,
  borderLeftColor: dt.vars.theme.color.bg1,
})
