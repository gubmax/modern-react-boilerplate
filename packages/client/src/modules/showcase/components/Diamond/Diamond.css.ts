import { keyframes, style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { dt } from 'client/src/common/styles/designTokens'

const WIDTH_pyramid = pxToRem(120)
const WIDTH_TRANSFORM = pxToRem(60)
const ANIMATION_DURATION = '8s'

export const container = style({
  width: pxToRem(164),
  height: pxToRem(204),
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  perspective: '400px',
  perspectiveOrigin: 'top',

  '@media': {
    [dt.media.maxWidth.mobile]: {
      width: pxToRem(82),
      height: pxToRem(102),
    },
  },
})

const pyramidBase = style({
  position: 'relative',
  width: WIDTH_pyramid,
  height: WIDTH_pyramid,
  transformStyle: 'preserve-3d',
})

const pyramidRotate = keyframes({
  from: { transform: 'rotateY(0deg)' },
  to: { transform: 'rotateY(360deg)' },
})

export const pyramid = style([
  pyramidBase,
  {
    top: pxToRem(-16),
    animation: `${pyramidRotate} ${ANIMATION_DURATION} linear infinite`,
  },
])

const pyramidBottomRotate = keyframes({
  from: { transform: 'rotateZ(180deg) rotateY(360deg)' },
  to: { transform: 'rotateZ(180deg) rotateY(0deg)' },
})

export const pyramidBottom = style([
  pyramidBase,
  {
    top: pxToRem(20),
    animation: `${pyramidBottomRotate} ${ANIMATION_DURATION} linear infinite`,
  },
])

const side = style({
  position: 'absolute',
  borderLeft: `${WIDTH_TRANSFORM} solid transparent`,
  borderRight: `${WIDTH_TRANSFORM} solid transparent`,
  borderBottom: `${WIDTH_pyramid} solid #647dee`,
  opacity: '0.3',
})

export const front = style([
  side,
  {
    transform: `translateZ(${WIDTH_TRANSFORM}) rotateX(30deg)`,
    transformOrigin: '0 100%',
    borderBottomColor: '#7f53ac',
  },
])

export const back = style([
  side,
  {
    transform: `translateZ(-${WIDTH_TRANSFORM}) rotateX(-30deg)`,
    transformOrigin: '0 100%',
  },
])

export const left = style([
  side,
  {
    transform: `translateX(-${WIDTH_TRANSFORM}) rotateZ(30deg) rotateY(90deg)`,
    transformOrigin: '50% 100%',
  },
])

export const right = style([
  side,
  {
    transform: `translateX(${WIDTH_TRANSFORM}) rotateZ(-30deg) rotateY(90deg)`,
    transformOrigin: '50% 100%',
  },
])

export const bottom = style({
  width: WIDTH_pyramid,
  height: WIDTH_pyramid,
  transform: `translateX(-${WIDTH_TRANSFORM}) rotateZ(90deg) rotateY(90deg)`,
  transformOrigin: '50% 100%',
  background: '#7f53ac',
})
