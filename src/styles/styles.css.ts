import { globalStyle } from '@vanilla-extract/css'
import { cssThemeVars, darkThemeVars, ligthThemeVars } from './theme.css'

globalStyle('body', {
  color: cssThemeVars.color.primary,
  background: cssThemeVars.color.bg0,
})

globalStyle(':root', {
  vars: ligthThemeVars,
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: darkThemeVars,
    },
  },
})
