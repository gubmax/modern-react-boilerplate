import { createGlobalTheme } from '@vanilla-extract/css'

import { pxToRem } from '../../helpers/pxToRem'
import { FONT_SIZE_DEFAULT } from '../constants/font'
import { SCREEN_SIZES } from '../constants/screens'

export const systemVars = createGlobalTheme(':root', {
  border: {
    width: {
      regular: pxToRem(1.25),
    },
    radius: {
      regular: pxToRem(16),
    },
  },
  color: {
    black: 'rgb(64, 64, 64)',
    transparentBorder: 'rgba(0, 0, 0, 0.01)',
    transparentWhite: 'rgba(245, 245, 245, 0.4)',
    white: 'rgb(245, 245, 245)',
  },
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  size: {
    font: `${FONT_SIZE_DEFAULT}px`,
    screen: SCREEN_SIZES,
  },
})
