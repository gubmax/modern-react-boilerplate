import { createGlobalTheme } from '@vanilla-extract/css'

import { FONT_SIZE_DEFAULT } from '../constants/font'
import { SCREEN_SIZES } from '../constants/screens'

export const systemVars = createGlobalTheme(':root', {
  borderRadius: {
    primary: '20px',
  },
  color: {
    transparentBorder: 'rgba(0, 0, 0, 0.01)',
    white: 'rgb(245, 245, 245)',
    black: 'rgb(64, 64, 64)',
  },
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  size: {
    font: `${FONT_SIZE_DEFAULT}px`,
    screen: SCREEN_SIZES,
  },
})
