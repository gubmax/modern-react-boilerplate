import { style } from '@vanilla-extract/css'
import { MediaQueries } from 'client/src/common/constants/media'

import { gridAtom, vars } from 'client/src/common/styles'

export const wrapper = style([
  gridAtom({
    display: 'flex',
    alignItems: 'center',
  }),
  {
    height: vars.sizes.headerHeight,
    padding: 0,
    borderRadius: `0 0 ${vars.borderRadius.primary} ${vars.borderRadius.primary}`,

    '@media': {
      [MediaQueries.MIN_WIDTH_MOBILE]: {
        padding: `${vars.space.s1} ${vars.space.s3}`,
      },

      [MediaQueries.MIN_WIDTH_TABLET]: {
        padding: `${vars.space.s1} ${vars.space.s4}`,
      },
    },
  },
])

export const linkLogo = style([
  gridAtom({ flexShrink: 0 }),
  {
    marginLeft: vars.space.s2,

    '@media': {
      [MediaQueries.MIN_WIDTH_MOBILE]: {
        marginLeft: 'unset',
      },
    },
  },
])

export const linkRepo = style({
  marginLeft: vars.space.s3,
})
