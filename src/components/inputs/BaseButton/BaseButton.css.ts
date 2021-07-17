import { style } from '@vanilla-extract/css'

import { cssThemeVars } from 'src/styles'

export const btn = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '20px',
  borderWidth: 0,
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontWeight: 500,
  height: '3rem',
  minWidth: '10rem',
  outline: 'none',
  padding: `0 ${cssThemeVars.color.primary}`,
})

export const defaultStyle = style({
  background: 'transparent',
  border: `1px solid ${cssThemeVars.color.accent}`,
  color: cssThemeVars.color.accent,

  ':focus': {
    color: cssThemeVars.color.accent,
  },
})

export const primaryStyle = style({
  background: cssThemeVars.color.accent,
  color: cssThemeVars.color.surface0,

  ':after': {
    background: 'rgba(255, 255, 255, .12)',
  },
})
