import { style } from '@vanilla-extract/css'
import { theme } from 'client/src/common/styles'

export const link = style({
  borderBottom: `1px dashed ${theme.color.primary}`,
})
