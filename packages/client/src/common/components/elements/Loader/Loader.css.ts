import { keyframes, style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'

const borderRadius = style({ borderRadius: '50%' })

const spin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
})

export const spinner = style([
  borderRadius,
  {
    boxSizing: 'border-box',
    width: pxToRem(44),
    height: pxToRem(44),
    margin: 'auto',
    borderWidth: pxToRem(3),
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
  width: pxToRem(20),
  height: pxToRem(20),
  borderWidth: pxToRem(2),
})

export const spinnerSecondary = style({
  borderRightColor: dt.vars.theme.color.bg0,
  borderLeftColor: dt.vars.theme.color.bg1,
})
