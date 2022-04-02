/**
 * @file Based on Material Design type system
 * @link https://material.io/design/typography/the-type-system.html#type-scale
 */

import { assignVars, createGlobalTheme, createThemeContract } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { FONT_SIZE_DEFAULT } from 'client/src/common/constants/fonts'

const commonVars = createGlobalTheme(':root', {
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  sizes: {
    font: `${FONT_SIZE_DEFAULT}px`,
    headerHeight: pxToRem(70),
  },
  color: {
    transparentBorder: 'rgba(0, 0, 0, 0.01)',
    white: 'rgb(224, 224, 224)',
    black: 'rgb(64, 64, 64)',
  },
  borderRadius: {
    primary: '20px',
  },
})

const varsContract = createThemeContract({
  fontSize: {
    primary: null,
    secondary: null,
    accent: null,
    h1: null,
    h2: null,
    h3: null,
  },
  space: {
    s0: null,
    s1: null,
    s2: null,
    s3: null,
    s4: null,
  },
  icons: {
    small: null,
    huge: null,
  },
})

export const desktopVars = assignVars(varsContract, {
  fontSize: {
    primary: pxToRem(14),
    secondary: pxToRem(13),
    accent: pxToRem(16),
    h3: pxToRem(20),
    h2: pxToRem(24),
    h1: pxToRem(48),
  },
  space: {
    s0: pxToRem(8),
    s1: pxToRem(14),
    s2: pxToRem(16),
    s3: pxToRem(24),
    s4: pxToRem(42),
  },
  icons: {
    small: pxToRem(24),
    huge: pxToRem(112),
  },
})

export const tabletVars = assignVars(varsContract, {
  fontSize: {
    primary: pxToRem(14),
    secondary: pxToRem(13),
    accent: pxToRem(16),
    h3: pxToRem(20),
    h2: pxToRem(24),
    h1: pxToRem(34),
  },
  space: {
    s0: pxToRem(4),
    s1: pxToRem(10),
    s2: pxToRem(12),
    s3: pxToRem(20),
    s4: pxToRem(38),
  },
  icons: {
    small: pxToRem(24),
    huge: pxToRem(112),
  },
})

export const mobileVars = assignVars(varsContract, {
  fontSize: {
    primary: pxToRem(14),
    secondary: pxToRem(13),
    accent: pxToRem(16),
    h3: pxToRem(20),
    h2: pxToRem(24),
    h1: pxToRem(34),
  },
  space: {
    s0: pxToRem(4),
    s1: pxToRem(10),
    s2: pxToRem(12),
    s3: pxToRem(20),
    s4: pxToRem(38),
  },
  icons: {
    small: pxToRem(28),
    huge: pxToRem(112),
  },
})

export const vars = { ...commonVars, ...varsContract }
