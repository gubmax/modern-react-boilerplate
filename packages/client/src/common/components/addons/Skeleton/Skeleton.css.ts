import { keyframes, style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style({
  display: 'inline-block',
  width: '100%',
  height: pxToRem(20),
  background: dt.vars.theme.color.bg0,
  borderRadius: dt.vars.border.radius.regular,
})

export const margin = style({
  marginBottom: pxToRem(10),
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
    background: `linear-gradient(90deg, transparent, ${dt.vars.theme.color.surface0}, transparent)`,
    animation: `${shimmmer} 2s ease-out infinite`,
  },
})
