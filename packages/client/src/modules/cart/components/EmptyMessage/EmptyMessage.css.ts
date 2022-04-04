import { style } from '@vanilla-extract/css'

import { vars } from 'client/src/common/styles'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'
import { typography } from 'client/src/common/styles/shared/typography.css'

export const wrapper = style([
  surfaces.outline,
  {
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    padding: vars.space.s4,
  },
])

export const text = style([
  typography.h2,
  {
    margin: 0,
  },
])

export const icon = style({
  userSelect: 'none',
})
