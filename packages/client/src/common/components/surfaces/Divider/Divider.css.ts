import { style } from '@vanilla-extract/css'

import { palette } from 'client/src/common/styles'

export const divider = style({
  height: '1px',
  background: palette.color.borderLight,
  borderWidth: 0,
})
