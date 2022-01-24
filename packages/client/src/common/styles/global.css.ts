import { globalStyle } from '@vanilla-extract/css'

import { theme, darkTheme, ligthTheme, vars } from './vars.css'

globalStyle('body', {
  color: theme.color.primary,
  background: theme.color.bg0,
  fontFamily: vars.fontFamily,
  overscrollBehavior: 'none',
})

globalStyle(':root', {
  vars: ligthTheme,
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: darkTheme,
    },
  },
})
