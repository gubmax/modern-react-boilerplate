import { style } from '@vanilla-extract/css'

import { glassBackgroundStyle, gridAtom, vars } from 'client/src/common/styles'

export const wrapper = style([
  glassBackgroundStyle,
  gridAtom({
    display: 'flex',
    alignItems: 'center',
  }),
  {
    height: vars.sizes.headerHeight,
    padding: `${vars.space.s1} ${vars.space.s3}`,
    borderRadius: `0 0 ${vars.borderRadius.primary} ${vars.borderRadius.primary}`,
  },
])

export const marginLeft = style([
  gridAtom({ marginLeft: 'auto' }),
  {
    marginRight: vars.space.s3,
  },
])
