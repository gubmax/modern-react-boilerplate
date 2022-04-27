import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'

export const wrapper = style({
  marginTop: pxToRem(140),
})
