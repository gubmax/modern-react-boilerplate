import { style } from '@vanilla-extract/css'
import { vars } from 'src/styles'

export const wrapper = style({
  gridArea: 'aside',
  padding: `0 ${vars.space.s3} ${vars.space.s3}`,
})

export const listItem = style({
  display: 'flex',
  alignItems: 'center',
  padding: `11px ${vars.space.s3}`,
})

export const routeIcon = style({
  marginRight: vars.space.s1,
})
