/**
 * @file Based on Material Design type system
 * @link https://material.io/design/typography/the-type-system.html#type-scale
 */

import { assignVars, createGlobalTheme, createThemeContract } from '@vanilla-extract/css'

const FONT_SIZE = 14

const size = (val: number) => `${(val / FONT_SIZE).toFixed(2)}rem`

const commonVars = createGlobalTheme(':root', {
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  sizes: {
    font: `${FONT_SIZE}px`,
    headerHeight: size(70),
  },
  color: {
    transparentBorder: 'rgba(0, 0, 0, 0.01)',
    white: 'rgb(224, 224, 224)',
  },
  borderRadius: {
    primary: '20px',
  },
})

const varsContract = createThemeContract({
  fontSize: {
    primary: null,
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
    primary: size(14),
    accent: size(16),
    h3: size(20),
    h2: size(24),
    h1: size(48),
  },
  space: {
    s0: size(8),
    s1: size(14),
    s2: size(16),
    s3: size(24),
    s4: size(42),
  },
  icons: {
    small: size(24),
    huge: size(112),
  },
})

export const mobileVars = assignVars(varsContract, {
  fontSize: {
    primary: size(14),
    accent: size(16),
    h3: size(20),
    h2: size(24),
    h1: size(34),
  },
  space: {
    s0: size(4),
    s1: size(10),
    s2: size(12),
    s3: size(20),
    s4: size(38),
  },
  icons: {
    small: size(28),
    huge: size(112),
  },
})

export const vars = { ...commonVars, ...varsContract }
