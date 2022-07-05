import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { dt } from 'client/src/common/styles/designTokens'
import { typography } from 'client/src/common/styles/shared/typography.css'

export const wrapper = style({
  '@media': {
    [dt.media.minWidth.mobile]: {
      minWidth: pxToRem(320),
    },
  },
})

export const title = style([
  typography.h2,
  {
    marginBottom: dt.vars.space.s0,
  },
])

export const subtitle = style({
  marginBottom: dt.vars.space.s3,
  color: dt.vars.theme.color.secondary,
})

export const field = style({
  marginBottom: dt.vars.space.s3,
})
