import { globalStyle, keyframes } from '@vanilla-extract/css'

import { theme, darkTheme, ligthTheme, vars } from './vars.css'

globalStyle('html', {
  fontSize: '14px',
})

globalStyle('body, body *', {
  all: 'unset',
  boxSizing: 'border-box',
})

globalStyle('body', {
  color: theme.color.primary,
  background: theme.color.bg0,
  fontFamily: vars.fontFamily,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  WebkitTapHighlightColor: 'transparent',
})

globalStyle(
  `address, article, aside, blockquote, canvas, dd, div, dl, dt,fieldset,
  figcaption, figure, footer, form, h1, h2, h3 ,h4 ,h5, h6, header, hr, li,
  main, nav, noscript, ol, p, pre, section, table, tfoot, ul, video`,
  {
    display: 'block',
  },
)

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
})

globalStyle(':focus', {
  outline: 0,
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

globalStyle(':root', {
  vars: ligthTheme,
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: darkTheme,
    },
  },
})
