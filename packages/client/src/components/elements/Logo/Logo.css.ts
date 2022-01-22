import { style } from '@vanilla-extract/css'
import { theme, vars } from 'client/src/common/styles'

export const highlight = style({
  position: 'relative',
  display: 'inline-block',
  width: '2.5rem',
  marginLeft: vars.space.s0,
  textAlign: 'center',
  background: theme.color.bg0,
  borderRadius: '0.6rem',

  ':before': {
    content: '""',
    position: 'absolute',
    top: '-0.35rem',
    bottom: '-0.35rem',
    left: '-0.35rem',
    right: '-0.35rem',
    borderRadius: '0.6rem',
    transform: 'rotate(6deg)',
    background: 'linear-gradient(-45deg, #fb923c, #db2777)',
    zIndex: -1,
  },
})

export const text = style({
  fontSize: '1.8em',
  fontWeight: 500,
  marginBottom: 0,
})
