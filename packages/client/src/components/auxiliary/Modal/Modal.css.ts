import { keyframes, style } from '@vanilla-extract/css'

import { MediaQueries } from 'client/src/common/constants/media'
import { ScreenSizes } from 'client/src/common/constants/screen'
import { palette, vars } from 'client/src/common/styles'
import { TRANSITION_TIMEOUT } from './Modal.constants'

export const noScroll = style({
  position: 'fixed',
  overflow: 'hidden',
})

export const background = style({
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
})

export const wrapper = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  minHeight: '24rem',
  maxWidth: ScreenSizes.TABLET,
  margin: '0 auto',
  padding: 0,
  border: `0.1rem solid ${palette.color.borderLight}`,
  borderRadius: `${vars.borderRadius.primary} ${vars.borderRadius.primary} 0 0`,
  overflow: 'hidden',

  '@media': {
    [MediaQueries.MIN_WIDTH_MOBILE]: {
      top: vars.space.s4,
      bottom: 'unset',
      left: vars.space.s4,
      right: vars.space.s4,
      minHeight: 'unset',
      borderRadius: vars.borderRadius.primary,
    },
  },
})

export const header = style({
  padding: `${vars.space.s0} ${vars.space.s3}`,
  background: palette.color.borderLight,
})

export const body = style({
  padding: vars.space.s3,
})

export const closeButton = style({
  marginLeft: 'auto',
})

// Fade-in transition

const fadeInWrapper = keyframes({
  from: { opacity: 0, transform: 'translateY(3rem) scale(0.9)' },
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
