import { style } from '@vanilla-extract/css'
import { cssCommonVars } from 'src/styles'

export const wrapper = style({
  gridArea: 'aside',
  padding: `0 ${cssCommonVars.space.primary} ${cssCommonVars.space.primary}`,
})
