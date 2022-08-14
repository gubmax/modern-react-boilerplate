import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'

export const text = style({
  textAlign: 'center',
  color: dt.vars.theme.color.secondary,
  lineHeight: 1.5,
})
