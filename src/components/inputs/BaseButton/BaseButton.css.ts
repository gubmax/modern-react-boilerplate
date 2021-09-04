import { style } from '@vanilla-extract/css'

import { theme, gridAtom } from 'src/styles'

export const btn = style([
  gridAtom({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  {
    borderRadius: '20px',
    borderWidth: 0,
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontWeight: 500,
    height: '3rem',
    minWidth: '10rem',
    outline: 'none',
    padding: `0 ${theme.color.primary}`,
  },
])

export const defaultStyle = style({
  background: 'transparent',
  border: `1px solid ${theme.color.accent}`,
  color: theme.color.accent,

  ':focus': {
    color: theme.color.accent,
  },
})

export const primaryStyle = style({
  background: theme.color.accent,
  color: theme.color.surface0,

  ':after': {
    background: 'rgba(255, 255, 255, 0.25)',
  },
})
