import { style } from '@vanilla-extract/css'

import { gridAtom, vars } from 'client/src/common/styles'

export const wrapper = gridAtom({
  display: 'flex',
  alignItems: 'center',
})

export const marginLeft = style([
  {
    marginRight: vars.space.s3,
  },
  gridAtom({ marginLeft: 'auto' }),
])
