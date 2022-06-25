import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { dt } from 'client/src/common/styles/designTokens'

export const text = style({
  marginBottom: 0,
  padding: `${dt.vars.space.s0} 0 ${dt.vars.space.s0} ${dt.vars.space.s0}`,
  fontSize: dt.vars.fontSize.h2,
  fontWeight: 500,
  whiteSpace: 'nowrap',

  '@media': {
    [dt.media.maxWidth.mobile]: { fontSize: '1.5em' },
  },
})

export const title = style({
  display: 'none',

  '@media': {
    [dt.media.minWidth.tablet]: { display: 'unset' },
  },
})

const borderRadius = pxToRem(8)
const posDesktop = `-${pxToRem(4)}`
const posMobile = `-${pxToRem(3)}`

export const highlight = style({
  position: 'relative',
  display: 'inline-block',
  width: pxToRem(32),
  marginRight: dt.vars.space.s1,
  textAlign: 'center',
  lineHeight: 1.25,
  color: dt.vars.color.white,
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

  '@media': {
    [dt.media.maxWidth.mobile]: {
      width: pxToRem(28),

      ':before': {
        top: posMobile,
        bottom: posMobile,
        left: posMobile,
        right: posMobile,
      },
    },
  },
})
