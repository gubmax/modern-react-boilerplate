import { style } from '@vanilla-extract/css'

import { palette } from 'client/src/common/styles'

export const link = style({
  borderBottom: `1px dashed ${palette.color.primary}`,
})
