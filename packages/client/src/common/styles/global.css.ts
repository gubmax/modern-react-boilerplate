import { globalStyle } from '@vanilla-extract/css'
import { MediaQueries } from '../constants/media'

import { darkPalette, ligthPalette, palette } from './palette.css'
import { desktopVars, mobileVars, vars } from './vars.css'

globalStyle('html', {
  fontSize: vars.sizes.font,
})

globalStyle('body', {
  color: palette.color.primary,
  background: palette.color.bg0,
  fontFamily: vars.fontFamily,
  overscrollBehavior: 'none',
})

globalStyle(':root', {
  vars: { ...mobileVars, ...ligthPalette },
  '@media': {
    [MediaQueries.MIN_WIDTH_MOBILE]: {
      vars: desktopVars,
    },
    '(prefers-color-scheme: dark)': {
      vars: darkPalette,
    },
  },
})
