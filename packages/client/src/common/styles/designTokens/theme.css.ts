import { assignVars, createThemeContract } from '@vanilla-extract/css'

export const themeVars = createThemeContract({
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

export const lightThemeVars = assignVars(themeVars, {
  color: {
    primary: '#404040',
    secondary: '#767676',
    accent: '#3f51b5',
    accentLight: '#d0d6e7',
    bg0: '#e6e6e6',
    bg1: '#f5f5f5',
    transparentBg0: '#e6e6e6d9',
    surface0: '#f5f5f5',
    surface1: '#ffffff',
    border: '#bebebe',
    borderLight: '#ebebeb',
  },
  gradient: {
    accent: 'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)',
  },
})

export const darkThemeVars = assignVars(themeVars, {
  color: {
    primary: '#e0e0e0',
    secondary: '#404040',
    accent: '#647dee',
    accentLight: '#272b3b',
    bg0: '#111111',
    bg1: '#0c0c0c',
    transparentBg0: '#111111d9',
    surface0: '#1a1a1a',
    surface1: '#212121',
    border: '#282828',
    borderLight: '#141414',
  },
  gradient: {
    accent: 'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)',
  },
})
