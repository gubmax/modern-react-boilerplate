import { style } from '@vanilla-extract/css'

import { palette } from 'client/src/common/styles'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'

export const wrapper = style([
  surfaces.base,
  {
    cursor: 'pointer',
  },
])

export const active = style({
  background: palette.color.accentLight,
})
