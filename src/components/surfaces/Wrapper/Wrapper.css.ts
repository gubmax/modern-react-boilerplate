import { style } from '@vanilla-extract/css'
import { cssCommonVars, cssThemeVars } from 'src/styles'

export const wrapper = style({
  background: cssThemeVars.color.surface0,
  borderRadius: cssCommonVars.borderRadius.primary,
})

export const padding = style({
  padding: `${cssCommonVars.space.secondary} ${cssCommonVars.space.primary}`,
})
