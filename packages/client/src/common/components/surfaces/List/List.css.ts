import { style } from '@vanilla-extract/css'

import { vars } from 'client/src/common/styles'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'

export const wrapper = style([
  surfaces.flat,
  {
    padding: 0,
  },
])

export const divider = style({
  margin: `0 ${vars.space.s3}`,
})
