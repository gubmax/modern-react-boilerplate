import { style } from '@vanilla-extract/css'
import { dt } from 'client/src/common/styles/designTokens'

export const text = style({
  fontSize: '1.8em',
  fontWeight: 500,
  marginBottom: 0,
})

export const title = style({
  display: 'none',

  '@media': {
    [dt.media.minWidth.tablet]: { display: 'unset' },
  },
})

export const highlight = style({
  position: 'relative',
  display: 'inline-block',
  width: '2.5rem',
  marginLeft: dt.vars.space.s0,
  textAlign: 'center',
  lineHeight: 1.25,
  background: dt.vars.theme.color.bg0,
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
    background: dt.vars.theme.gradient.accent,
    zIndex: -1,
  },
})
