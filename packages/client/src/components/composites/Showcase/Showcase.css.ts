import { style } from '@vanilla-extract/css'

import { vars } from 'client/src/common/styles'

export const mainBanner = style({
  marginBottom: vars.space.s4,
})

export const productCardList = style({
  paddingBottom: vars.space.s3,
  marginBottom: vars.space.s3,
})
