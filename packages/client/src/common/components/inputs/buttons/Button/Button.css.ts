import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style({
  minWidth: pxToRem(140),
  fontSize: dt.vars.fontSize.subtitle1,
  borderRadius: dt.vars.border.radius.regular,
})

export const inner = style({
  borderRadius: dt.vars.border.radius.regular,
})

export const large = style({
  width: '100%',
})
