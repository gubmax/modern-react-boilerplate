import { style } from '@vanilla-extract/css'

import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'

export const wrapper = style([
  gridAtom({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  }),
  {
    paddingTop: dt.vars.space.s4,
    minHeight: '100vh',
  },
])

export const form = style([
  surfaces.flat,
  {
    padding: `${dt.vars.space.s2} ${dt.vars.space.s3}`,
    borderRadius: dt.vars.borderRadius.primary,
  },
])

export const logo = style({
  marginBottom: dt.vars.space.s3,
})
