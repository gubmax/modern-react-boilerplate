import { style } from '@vanilla-extract/css'
import { cssThemeVars } from 'src/styles'

export const link = style({
  borderBottom: `1px dashed ${cssThemeVars.color.primary}`,
})
