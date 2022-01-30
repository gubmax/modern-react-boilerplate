import { style, keyframes } from '@vanilla-extract/css'

import { vars, palette } from 'client/src/common/styles'

export const wrapper = style({
  width: '100%',
  height: '1.5rem',
  background: palette.color.bg0,
  borderRadius: vars.borderRadius.primary,
})

export const margin = style({
  marginBottom: '10px',
})

const shimmmer = keyframes({
  '100%': { transform: 'translateX(100%)' },
})

export const shim = style({
  position: 'relative',
  overflow: 'hidden',

  ':after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transform: 'translateX(-100%)',
    background: `linear-gradient(90deg, transparent, ${palette.color.surface1}, transparent)`,
    animation: `${shimmmer} 1s ease-in-out infinite`,
  },
})
