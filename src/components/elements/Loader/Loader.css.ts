import { style, keyframes, composeStyles } from '@vanilla-extract/css'

import { cssThemeVars } from 'src/styles'

const borderRadius = style({
  borderRadius: '50%',
})

const spin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
})

export const spinner = composeStyles(
  borderRadius,
  style({
    boxSizing: 'border-box',
    width: '44px',
    height: '44px',
    margin: 'auto',
    borderWidth: '3px',
    borderStyle: 'solid',
    borderColor: `transparent ${cssThemeVars.color.accent}`,
    animation: `${spin} 0.65s infinite linear`,
  }),
)

export const loader = composeStyles(
  borderRadius,
  style({
    display: 'flex',
    transform: 'translateZ(0)',
  }),
)

export const spinnerSmall = style({
  width: '20px',
  height: '20px',
  borderWidth: '2px',
})

export const spinnerSecondary = style({
  borderRightColor: cssThemeVars.color.bg0,
  borderLeftColor: cssThemeVars.color.bg1,
})