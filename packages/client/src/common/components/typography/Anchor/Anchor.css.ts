import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'

export const link = style({
  borderBottom: `${dt.vars.border.width.regular} dashed ${dt.vars.theme.color.primary}`,

  ':focus': {
    color: dt.vars.theme.color.accent,
    borderColor: dt.vars.theme.color.accent,
  },
})
