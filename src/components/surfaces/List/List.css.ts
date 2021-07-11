import { style } from '@vanilla-extract/css'
import { cssCommonVars } from 'src/styles'

export const divider = style({
  margin: `0 ${cssCommonVars.space.primary}`,
})
