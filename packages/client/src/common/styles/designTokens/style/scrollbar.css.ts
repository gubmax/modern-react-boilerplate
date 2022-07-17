import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { systemVars } from '../system.css'
import { themeVars } from '../theme.css'

export const scrollbar = style({
  scrollbarColor: 'red blue',
  scrollbarWidth: 'thin',

  '::-webkit-scrollbar-thumb': {
    backgroundColor: themeVars.color.border,
    borderRadius: systemVars.border.radius.regular,
  },

  '::-webkit-scrollbar-track': {
    backgroundColor: themeVars.color.surface0,
    borderRadius: systemVars.border.radius.regular,
  },

  '::-webkit-scrollbar': {
    width: pxToRem(12),
    height: pxToRem(12),
  },

  selectors: {
    '&::-webkit-scrollbar-thumb:active': {
      backgroundColor: themeVars.color.accentLight,
    },
  },
})
