import { globalStyle, keyframes } from '@vanilla-extract/css'
import { MediaQueries } from '../constants/media'

import { darkPalette, ligthPalette, palette } from './palette.css'
import { desktopVars, mobileVars, vars } from './vars.css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',

  '@media': {
    [MediaQueries.MOTION_REDUCE]: {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      scrollBehavior: 'auto',
      transitionDuration: '0.01ms !important',
    },
  },
})

globalStyle('html', {
  fontSize: vars.sizes.font,
})

globalStyle('html:focus-within', {
  scrollBehavior: 'smooth',

  '@media': {
    [MediaQueries.MOTION_REDUCE]: { scrollBehavior: 'auto' },
  },
})

globalStyle('body, root', {
  width: '100%',
  minHeight: '100vh',
})

globalStyle('body', {
  color: palette.color.primary,
  background: palette.color.bg0,
  fontFamily: vars.fontFamily,
  overscrollBehavior: 'none',

  MozOsxFontSmoothing: 'grayscale',
  WebkitFontSmoothing: 'antialiased',
  WebkitTapHighlightColor: 'transparent',
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

globalStyle(':focus', {
  outline: 0,
})

globalStyle('a', {
  cursor: 'pointer',
})

const autofill = keyframes({
  to: {
    color: 'inherit',
    background: 'inherit',
  },
})

globalStyle('input:-webkit-autofill', {
  animationName: autofill,
  animationFillMode: 'both',
})
