import { style } from '@vanilla-extract/css'

import { vars, theme } from 'client/src/common/styles'

export const wrapper = style({
  background: theme.color.surface0,
  borderRadius: vars.borderRadius.primary,
})

export const padding = style({
  padding: `${vars.space.s2} ${vars.space.s3}`,
})
