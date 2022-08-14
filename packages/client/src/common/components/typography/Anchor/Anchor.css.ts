import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'

export const link = style({
  borderBottomWidth: dt.vars.border.width.regular,
  borderStyle: 'dashed',
  borderColor: 'inherit',

  ':focus': {
    color: dt.vars.theme.color.accent,
    borderColor: dt.vars.theme.color.accent,
  },
})
