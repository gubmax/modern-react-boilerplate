import { style } from '@vanilla-extract/css'
import { vars } from 'src/styles'

export const logo = style({
  display: 'block',
  width: '100%',
  marginBottom: vars.space.s3,
  textAlign: 'center',
  fontSize: vars.fontSize.h1,
})
