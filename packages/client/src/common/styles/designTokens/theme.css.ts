import { assignVars, createThemeContract } from '@vanilla-extract/css'

export const themeVars = createThemeContract({
  color: {
    primary: null,
    secondary: null,
    accent: null,
    accentLight: null,
    bg0: null,
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
    primary: '#1a1a1a',
    secondary: '#919191',
    accent: '#3f51b5',
    accentLight: '#d0d6e7',
    bg0: '#f2f2f2',
    transparentBg0: '#ffffffd9',
    surface0: '#ffffff',
    surface1: '#f2f2f2',
    border: '#e3e3e3',
    borderLight: '#f5f5f5',
  },
  gradient: {
    accent: 'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)',
  },
})

export const darkThemeVars = assignVars(themeVars, {
  color: {
    primary: '#e8e8e9',
    secondary: '#919191',
    accent: '#647dee',
    accentLight: '#272b3b',
    bg0: '#171819',
    transparentBg0: '#202123d9',
    surface0: '#202123',
    surface1: '#2b2c2e',
    border: '#2a2b2d',
    borderLight: '#27282a',
  },
  gradient: {
    accent: 'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)',
  },
})
