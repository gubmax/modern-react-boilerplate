import { style } from '@vanilla-extract/css'

import { vars } from 'client/src/common/styles'

export const wrapper = style({
  padding: 0,
})

export const divider = style({
  margin: `0 ${vars.space.s3}`,
})
