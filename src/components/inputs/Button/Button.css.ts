import { style } from '@vanilla-extract/css'

import { cssCommonVars } from 'src/styles'

export const wrapper = style({
  fontSize: cssCommonVars.fontSize.accent,
})

export const large = style({
  width: 'width: 100%',
})
