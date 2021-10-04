import { style } from '@vanilla-extract/css'
import { theme } from 'src/styles'

export const highlight = style({
  display: 'inline-block',
  width: '2.1rem',
  borderStyle: 'solid',
  borderColor: theme.color.accent,
  borderWidth: '0.25rem',
  textAlign: 'center',
  borderRadius: '0.6rem',
  transform: 'rotate(6deg)',
})

export const text = style({
  marginBottom: 0,
})
