import { keyframes, style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { dt } from 'client/src/common/styles/designTokens'
import {
  LOADING_OPACITY_TRANSITION_DELAY,
  LOADING_WIDTH_TRANSITION_DELAY,
} from './ProgressBar.constants'

export const wrapper = style({
  position: 'fixed',
  width: 0,
  height: pxToRem(3),
  background: dt.vars.theme.color.accent,
  userSelect: 'none',
  zIndex: 2,
})

const loadinngAnimation = keyframes({
  '10%': { width: '50%' },
  to: { width: '90%' },
})

export const loading = style({
  animationName: loadinngAnimation,
  animationDuration: '8s',
  animationFillMode: 'forwards',
  transition: `width ${LOADING_WIDTH_TRANSITION_DELAY}ms ease-in-out`,
})

const loadinngEndAnimation = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

export const loadingEnd = style({
  width: '100%',
  animationName: loadinngEndAnimation,
  animationDuration: `${LOADING_OPACITY_TRANSITION_DELAY}ms`,
  transition: `width ${LOADING_WIDTH_TRANSITION_DELAY}ms ease-in-out,
    opacity ${LOADING_OPACITY_TRANSITION_DELAY}ms ease-in-out`,
})
