import { style } from '@vanilla-extract/css'
import { cssCommonVars } from 'src/styles'

export const wrapper = style({
  gridArea: 'aside',
  padding: `0 ${cssCommonVars.space.primary} ${cssCommonVars.space.primary}`,
})

export const listItem = style({
  padding: `8px ${cssCommonVars.space.primary}`,
})

export const routeIcon = style({
  width: '16px',
  padding: '4px',
  display: 'inline-block',
  marginRight: '8px',
  fontSize: cssCommonVars.fontSize.accent,
  textAlign: 'center',
})
