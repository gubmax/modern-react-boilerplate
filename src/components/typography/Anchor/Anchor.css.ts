import { style } from '@vanilla-extract/css'
import { theme } from 'src/styles'

export const link = style({
  borderBottom: `1px dashed ${theme.color.primary}`,
})
