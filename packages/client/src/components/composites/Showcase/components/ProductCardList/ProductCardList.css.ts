import { style } from '@vanilla-extract/css'

import { MediaQueries } from 'client/src/common/constants/media'
import { vars, scrollbar } from 'client/src/common/styles'

export const wrapper = style([
  scrollbar,
  {
    display: 'flex',
    overflowX: 'auto',
    overscrollBehaviorX: 'contain',
    scrollBehavior: 'smooth',
    scrollSnapType: 'x mandatory',
    scrollPadding: '0',
  },
])

export const productCard = style({
  scrollSnapAlign: 'start',
  marginRight: vars.space.s1,

  ':last-child': {
    marginRight: 0,
  },

  '@media': {
    [MediaQueries.MIN_WIDTH_MOBILE]: {
      marginRight: vars.space.s3,
    },
  },
})

export const productCardBg0 = style({
  background: 'linear-gradient(-45deg, #faca12, #f97915)',
})

export const productCardBg1 = style({
  background: 'linear-gradient(-45deg, #39bbf7, #616af1)',
})

export const productCardBg2 = style({
  background: 'linear-gradient(-45deg, #ec4898, #f43e5f)',
})

export const productCardBg3 = style({
  background: 'linear-gradient(-45deg, #48dd82, #19b6c2)',
})
