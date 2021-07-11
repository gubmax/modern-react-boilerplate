import { createThemeContract, assignVars, createGlobalTheme } from '@vanilla-extract/css'

export const cssCommonVars = createGlobalTheme(':root', {
  fontSize: {
    primary: '1rem',
    accent: '1.10rem',
    h1: '3rem',
    h2: '1.65rem',
    h3: '1.25rem',
  },
  space: {
    primary: '1.5rem',
    secondary: '1.15rem',
  },
  borderRadius: {
    primary: '20px',
  },
})

export const cssThemeVars = createThemeContract({
  color: {
    primary: '',
    secondary: '',
    accent: '',
    accentLight: '',
    bg0: '',
    bg1: '',
    surface0: '',
    surface1: '',
    border: '',
    borderLight: '',
  },
})

export const ligthThemeVars = assignVars(cssThemeVars, {
  color: {
    primary: 'rgb(64, 64, 64)',
    secondary: 'rgb(118, 118, 118)',
    accent: 'rgb(63, 81, 181)',
    accentLight: 'rgb(208, 214, 231)',
    bg0: 'rgb(230, 230, 230)',
    bg1: 'rgb(118, 118, 118)',
    surface0: 'rgb(245, 245, 245)',
    surface1: 'rgb(255, 255, 255)',
    border: 'rgb(190, 190, 190)',
    borderLight: 'rgb(235, 235, 235)',
  },
})

export const darkThemeVars = assignVars(cssThemeVars, {
  color: {
    primary: 'rgb(224, 224, 224)',
    secondary: 'rgb(64, 64, 64)',
    accent: 'rgb(92, 107, 192)',
    accentLight: 'rgb(39, 43, 59)',
    bg0: 'rgb(17, 17, 17)',
    bg1: 'rgb(176, 176, 177)',
    surface0: 'rgb(26, 26, 26)',
    surface1: 'rgb(33, 33, 33)',
    border: 'rgb(12, 12, 12)',
    borderLight: 'rgb(20, 20, 20)',
  },
})
