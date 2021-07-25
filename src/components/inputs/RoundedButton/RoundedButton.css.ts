import { style } from '@vanilla-extract/css'

import { vars } from 'src/styles'

export const rounded = style({
  width: '3rem',
  minWidth: '3rem',
  fontSize: vars.fontSize.h3,
  borderRadius: '50%',
})
