import { style } from '@vanilla-extract/css'
import { cssThemeVars } from 'src/styles'

export const divider = style({
  height: '1px',
  background: cssThemeVars.color.borderLight,
  borderWidth: 0,
})
