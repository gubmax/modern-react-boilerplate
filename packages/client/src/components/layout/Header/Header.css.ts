import { style } from '@vanilla-extract/css'
import { MediaQueries } from 'client/src/common/constants/media'

import { glassBackgroundStyle, gridAtom, vars } from 'client/src/common/styles'

export const wrapper = style([
  glassBackgroundStyle,
  gridAtom({
    display: 'flex',
    alignItems: 'center',
  }),
  {
    height: vars.sizes.headerHeight,
    padding: `0 ${vars.space.s1} 0 ${vars.space.s2}`,
    borderRadius: `0 0 ${vars.borderRadius.primary} ${vars.borderRadius.primary}`,

    '@media': {
      [MediaQueries.MIN_WIDTH_MOBILE]: {
        padding: `${vars.space.s1} ${vars.space.s3}`,
      },
    },
  },
])

export const marginLeft = style([
  gridAtom({ marginLeft: 'auto' }),
  {
    marginRight: vars.space.s3,
  },
])
