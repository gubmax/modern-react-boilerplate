import { style, keyframes } from '@vanilla-extract/css'

import { palette, gridAtom } from 'client/src/common/styles'

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
    borderColor: `transparent ${palette.color.accent}`,
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
  borderRightColor: palette.color.bg0,
  borderLeftColor: palette.color.bg1,
})
