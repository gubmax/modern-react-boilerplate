import { style } from '@vanilla-extract/css'

import { TRANSITON_DELAY_MS } from './useSlideTransition.constants'

export const transition = style({
  transition: `transform ${TRANSITON_DELAY_MS}ms`,
  willChange: 'transform',
})
