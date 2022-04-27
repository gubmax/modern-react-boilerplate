import { keyframes, style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { dt } from 'client/src/common/styles/designTokens'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'
import { TRANSITION_TIMEOUT } from './Modal.constants'

export const noScroll = style({
  position: 'fixed',
  overflow: 'hidden',
})

export const background = style([
  surfaces.glass,
  {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    willChange: 'scroll-position',
    zIndex: 1,
  },
])

export const wrapper = style([
  surfaces.flat,
  {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    minHeight: pxToRem(320),
    maxWidth: dt.vars.size.screen.tablet,
    margin: '0 auto',
    border: `${pxToRem(1.25)} solid ${dt.vars.theme.color.borderLight}`,
    borderRadius: `${dt.vars.borderRadius.primary} ${dt.vars.borderRadius.primary} 0 0`,
    overflow: 'hidden',

    '@media': {
      [dt.media.minWidth.mobile]: {
        top: dt.vars.space.s4,
        bottom: 'unset',
        left: dt.vars.space.s4,
        right: dt.vars.space.s4,
        minHeight: 'unset',
        borderRadius: dt.vars.borderRadius.primary,
      },
    },
  },
])

export const header = style({
  padding: `${dt.vars.space.s0} ${dt.vars.space.s3}`,
  background: dt.vars.theme.color.borderLight,
})

export const body = style({
  padding: dt.vars.space.s3,
})

export const closeButton = style({
  marginLeft: 'auto',
})

// Fade-in transition

const fadeInWrapper = keyframes({
  from: { opacity: 0, transform: `translateY(${pxToRem(72)}) scale(0.9)` },
  to: { opacity: 1, transform: 'translateY(0) scale(1)' },
})

export const animateWrapper = style({
  transitionTimingFunction: 'linear',
  animationName: fadeInWrapper,
})

const fadeInBg = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

export const animateBg = style({
  transitionTimingFunction: 'ease',
  animationName: fadeInBg,
})

export const animationBase = style({
  animationDuration: `${TRANSITION_TIMEOUT}ms`,
  animationFillMode: 'forwards',
})
