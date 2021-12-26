import { style } from '@vanilla-extract/css'

import { gridAtom, vars } from 'client/src/common/styles'

export const wrapper = style([
  gridAtom({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  {
    height: '100vh',
    padding: vars.space.s3,
    textAlign: 'center',
  },
])
