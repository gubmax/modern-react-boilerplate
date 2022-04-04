import { style } from '@vanilla-extract/css'

import { dt } from '../designTokens'

export const scrollbar = style({
  scrollbarColor: 'red blue',
  scrollbarWidth: 'thin',

  '::-webkit-scrollbar-thumb': {
    backgroundColor: dt.vars.theme.color.border,
    borderRadius: dt.vars.borderRadius.primary,
  },

  '::-webkit-scrollbar-track': {
    backgroundColor: dt.vars.theme.color.surface0,
    borderRadius: dt.vars.borderRadius.primary,
  },

  '::-webkit-scrollbar': {
    width: '0.65rem',
    height: '0.65rem',
  },

  selectors: {
    '&::-webkit-scrollbar-thumb:active': {
      backgroundColor: dt.vars.theme.color.accentLight,
    },
  },
})
