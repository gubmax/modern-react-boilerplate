import { style } from '@vanilla-extract/css'

import { palette } from '../palette.css'
import { vars } from '../vars.css'

export const scrollbar = style({
  scrollbarColor: 'red blue',
  scrollbarWidth: 'thin',

  '::-webkit-scrollbar-thumb': {
    backgroundColor: palette.color.border,
    borderRadius: vars.borderRadius.primary,
  },

  '::-webkit-scrollbar-track': {
    backgroundColor: palette.color.surface0,
    borderRadius: vars.borderRadius.primary,
  },

  '::-webkit-scrollbar': {
    width: '0.65rem',
    height: '0.65rem',
  },

  selectors: {
    '&::-webkit-scrollbar-thumb:active': {
      backgroundColor: palette.color.accentLight,
    },
  },
})
