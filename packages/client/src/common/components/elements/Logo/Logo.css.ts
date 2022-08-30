import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { dt } from 'client/src/common/styles/designTokens'

const borderRadius = pxToRem(8)
const posDesktop = `-${pxToRem(4)}`

export const highlight = style({
  position: 'relative',
  display: 'inline-block',
  width: pxToRem(32),
  color: dt.vars.color.white,
  fontSize: dt.vars.fontSize.h2,
  fontWeight: 500,
  textAlign: 'center',
  lineHeight: 1.25,
  borderRadius,
  zIndex: 0,

  ':before': {
    content: '""',
    position: 'absolute',
    top: posDesktop,
    bottom: posDesktop,
    left: posDesktop,
    right: posDesktop,
    borderRadius,
    transform: 'rotate(6deg)',
    background: dt.vars.theme.gradient.accent,
    zIndex: -1,
  },
})
