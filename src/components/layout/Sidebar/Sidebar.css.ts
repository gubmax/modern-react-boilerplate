import { style } from '@vanilla-extract/css'
import { vars } from 'src/styles'

export const wrapper = style({
  gridArea: 'aside',
  padding: `0 ${vars.space.primary} ${vars.space.primary}`,
})

export const listItem = style({
  padding: `8px ${vars.space.primary}`,
})

export const routeIcon = style({
  width: '16px',
  padding: '4px',
  display: 'inline-block',
  marginRight: '8px',
  fontSize: vars.fontSize.accent,
  textAlign: 'center',
})
