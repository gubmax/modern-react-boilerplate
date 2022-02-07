import { createThemeContract, assignVars } from '@vanilla-extract/css'

export const palette = createThemeContract({
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
  gradient: {
    accent: null,
  },
})

export const ligthPalette = assignVars(palette, {
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
  gradient: {
    accent: 'linear-gradient(-45deg, #00b5dd, #6153f9)',
  },
})

export const darkPalette = assignVars(palette, {
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
  gradient: {
    accent: 'linear-gradient(-45deg, #66e3ff, #7064f9)',
  },
})
