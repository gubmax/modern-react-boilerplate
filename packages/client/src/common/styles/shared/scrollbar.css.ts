import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { dt } from '../designTokens'

export const scrollbar = style({
  scrollbarColor: 'red blue',
  scrollbarWidth: 'thin',

  '::-webkit-scrollbar-thumb': {
    backgroundColor: dt.vars.theme.color.border,
    borderRadius: dt.vars.border.radius.regular,
  },

  '::-webkit-scrollbar-track': {
    backgroundColor: dt.vars.theme.color.surface0,
    borderRadius: dt.vars.border.radius.regular,
  },

  '::-webkit-scrollbar': {
    width: pxToRem(12),
    height: pxToRem(12),
  },

  selectors: {
    '&::-webkit-scrollbar-thumb:active': {
      backgroundColor: dt.vars.theme.color.accentLight,
    },
  },
})
