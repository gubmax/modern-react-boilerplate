import { globalStyle, keyframes } from '@vanilla-extract/css'

import { dt } from './designTokens'
import { desktopVars, mobileVars, tabletVars } from './designTokens/adaptive.css'
import { darkThemeVars, lightThemeVars } from './designTokens/theme.css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',

  '@media': {
    [dt.media.prefersReducedMotion.reduce]: {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      scrollBehavior: 'auto',
      transitionDuration: '0.01ms !important',
    },
  },
})

globalStyle('html', {
  fontSize: dt.vars.size.font,
  WebkitTextSizeAdjust: '100%',
})

globalStyle('html:focus-within', {
  scrollBehavior: 'smooth',

  '@media': {
    [dt.media.prefersReducedMotion.reduce]: { scrollBehavior: 'auto' },
  },
})

globalStyle('body, root', {
  width: '100%',
  minHeight: '100vh',
})

globalStyle('body', {
  color: dt.vars.theme.color.primary,
  background: dt.vars.theme.color.bg0,
  fontFamily: dt.vars.fontFamily,
  overscrollBehavior: 'none',

  MozOsxFontSmoothing: 'grayscale',
  WebkitFontSmoothing: 'antialiased',
  WebkitTapHighlightColor: 'transparent',
})

globalStyle(':root', {
  colorScheme: 'light',
  vars: { ...mobileVars, ...lightThemeVars },
  '@media': {
    [dt.media.minWidth.mobile]: { vars: tabletVars },
    [dt.media.minWidth.tablet]: { vars: desktopVars },
    '(prefers-color-scheme: dark)': {
      colorScheme: 'dark',
      vars: darkThemeVars,
    },
  },
})

globalStyle(':focus', {
  outline: 0,
})

globalStyle('a', {
  color: 'unset',
  cursor: 'pointer',
  textDecoration: 'none',
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
