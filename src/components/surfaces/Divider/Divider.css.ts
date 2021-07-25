import { style } from '@vanilla-extract/css'
import { theme } from 'src/styles'

export const divider = style({
  height: '1px',
  background: theme.color.borderLight,
  borderWidth: 0,
})
