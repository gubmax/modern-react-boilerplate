import { style } from '@vanilla-extract/css'

import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style([
  gridAtom({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  {
    height: '100vh',
    padding: dt.vars.space.s3,
    textAlign: 'center',
  },
])

export const title = style([
  dt.style.typography.h1,
  {
    marginBottom: dt.vars.space.s2,
  },
])
