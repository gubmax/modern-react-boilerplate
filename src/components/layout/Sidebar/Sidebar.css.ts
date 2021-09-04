import { style } from '@vanilla-extract/css'
import { vars } from 'src/styles'

export const wrapper = style({
  gridArea: 'aside',
  padding: `0 ${vars.space.primary} ${vars.space.primary}`,
})

export const listItem = style({
  display: 'flex',
  alignItems: 'center',
  padding: `11px ${vars.space.primary}`,
})

export const routeIcon = style({
  marginRight: vars.space.secondary,
})
