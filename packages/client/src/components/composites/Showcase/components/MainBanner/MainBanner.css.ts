import { style } from '@vanilla-extract/css'

import { MediaQueries } from 'client/src/common/constants/media'
import { textFillColor, vars } from 'client/src/common/styles'

export const wrapper = style({
  background: 'linear-gradient(-45deg, #a655f6, #6565f1)',
})

export const title = style([
  textFillColor,
  {
    background: 'linear-gradient(-45deg, #b26ef7, #e0e0e0)',
    backgroundClip: 'text',
  },
])

export const stamp = style({
  position: 'relative',
  bottom: '1rem',
  transform: 'rotate(6deg)',

  '@media': {
    [MediaQueries.MIN_WIDTH_TABLET]: {
      marginLeft: vars.space.s3,
      bottom: '2.5rem',
    },
  },
})
