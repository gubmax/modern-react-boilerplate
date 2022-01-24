import { createThemeContract, assignVars, createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  sizes: {
    headerHeight: '5rem',
  },
  colors: {
    transparentBorder: 'rgba(0, 0, 0, 0.01)',
  },
  fontSize: {
    primary: '1rem',
    accent: '1.10rem',
    h1: '3rem',
    h2: '1.65rem',
    h3: '1.25rem',
  },
  space: {
    s0: '0.5rem',
    s1: '1rem',
    s2: '1.15rem',
    s3: '1.5rem',
    s4: '3rem',
  },
  borderRadius: {
    primary: '20px',
  },
})

export const theme = createThemeContract({
  color: {
    primary: null,
    secondary: null,
    accent: null,
    accentLight: null,
    bg0: null,
    bg1: null,
    transparentBg0: null,
    surface0: null,
    surface1: null,
    border: null,
    borderLight: null,
  },
})

export const ligthTheme = assignVars(theme, {
  color: {
    primary: 'rgb(64, 64, 64)',
    secondary: 'rgb(118, 118, 118)',
    accent: 'rgb(63, 81, 181)',
    accentLight: 'rgb(208, 214, 231)',
    bg0: 'rgb(230, 230, 230)',
    bg1: 'rgb(118, 118, 118)',
    transparentBg0: 'rgba(230, 230, 230, 0.85)',
    surface0: 'rgb(245, 245, 245)',
    surface1: 'rgb(255, 255, 255)',
    border: 'rgb(190, 190, 190)',
    borderLight: 'rgb(235, 235, 235)',
  },
})

export const darkTheme = assignVars(theme, {
  color: {
    primary: 'rgb(224, 224, 224)',
    secondary: 'rgb(64, 64, 64)',
    accent: 'rgb(92, 107, 192)',
    accentLight: 'rgb(39, 43, 59)',
    bg0: 'rgb(17, 17, 17)',
    bg1: 'rgb(176, 176, 177)',
    transparentBg0: 'rgba(17, 17, 17, 0.85)',
    surface0: 'rgb(26, 26, 26)',
    surface1: 'rgb(33, 33, 33)',
    border: 'rgb(40, 40, 40)',
    borderLight: 'rgb(20, 20, 20)',
  },
})
