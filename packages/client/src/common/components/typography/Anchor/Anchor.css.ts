import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'

export const link = style({
  borderBottom: `1px dashed ${dt.vars.theme.color.primary}`,
})
