import { style } from '@vanilla-extract/css'

import { vars } from 'client/src/common/styles'

export const mainBanner = style({
  marginBottom: vars.space.s3,
})

export const groupSlider = style({
  marginBottom: vars.space.s3,
})

export const productCardList = style({
  paddingBottom: vars.space.s1,
  marginBottom: vars.space.s3,
})

export const productCard = style({
  marginRight: vars.space.s1,

  ':last-child': {
    marginRight: 'unset',
  },
})
