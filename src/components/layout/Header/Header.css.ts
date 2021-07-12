import { style } from '@vanilla-extract/css'
import { cssCommonVars } from 'src/styles'

export const wrapper = style({
  gridArea: 'header',
  display: 'flex',
  alignItems: 'center',
  padding: cssCommonVars.space.primary,
})

export const logoWrapper = style({
  marginBottom: 0,
})

export const repoLink = style({
  marginLeft: 'auto',
})
