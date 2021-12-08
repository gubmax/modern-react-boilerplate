import { style } from '@vanilla-extract/css'
import { theme } from 'client/src/styles'

export const divider = style({
  height: '1px',
  background: theme.color.borderLight,
  borderWidth: 0,
})
