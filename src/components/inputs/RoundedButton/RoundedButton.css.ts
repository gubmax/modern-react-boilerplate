import { style } from '@vanilla-extract/css'

import { cssCommonVars } from 'src/styles'

export const rounded = style({
  width: '3rem',
  minWidth: '3rem',
  fontSize: cssCommonVars.fontSize.h3,
  borderRadius: '50%',
})
