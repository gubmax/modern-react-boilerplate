import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { typography } from 'client/src/common/styles/shared/typography.css'

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
    overflow: 'hidden',
  },
])

export const title = style({
  fontSize: '8rem',
  fontWeight: 'bold',
})

export const text = style([
  typography.h1,
  {
    marginBottom: dt.vars.space.s3,
  },
])
