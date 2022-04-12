import { style } from '@vanilla-extract/css'

import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style([
  gridAtom({
    display: 'flex',
    flexDirection: 'column',
  }),
  {
    height: 'inherit',
  },
])

export const navigationList = style({
  marginBottom: dt.vars.space.s3,
})
