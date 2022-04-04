import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'

export const wrapper = style([
  surfaces.flat,
  {
    padding: 0,
  },
])

export const divider = style({
  margin: `0 ${dt.vars.space.s3}`,
})
