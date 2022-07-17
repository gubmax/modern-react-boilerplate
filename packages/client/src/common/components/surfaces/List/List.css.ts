import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style([
  dt.style.surfaces.flat,
  {
    borderRadius: dt.vars.border.radius.regular,
  },
])

export const divider = style({
  margin: `0 ${dt.vars.space.s3}`,
})
