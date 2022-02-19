import { style } from '@vanilla-extract/css'

import { palette } from '../palette.css'
import { vars } from '../vars.css'

export const scrollbar = style({
  scrollbarColor: 'red blue',
  scrollbarWidth: 'thin',

  '::-webkit-scrollbar-thumb': {
    backgroundColor: palette.color.surface1,
    borderRadius: vars.borderRadius.primary,
  },

  '::-webkit-scrollbar-track': {
    backgroundColor: palette.color.surface0,
    borderRadius: vars.borderRadius.primary,
  },

  '::-webkit-scrollbar': {
    width: '1rem',
    height: '1rem',
  },

  selectors: {
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: palette.color.border,
    },
    '&::-webkit-scrollbar-thumb:active': {
      backgroundColor: palette.color.accentLight,
    },
  },
})
