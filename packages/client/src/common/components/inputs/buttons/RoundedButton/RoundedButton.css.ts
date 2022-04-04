import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'

export const rounded = style({
  width: '3rem',
  minWidth: '3rem',
  fontSize: dt.vars.fontSize.h3,
  borderRadius: '50%',
})
