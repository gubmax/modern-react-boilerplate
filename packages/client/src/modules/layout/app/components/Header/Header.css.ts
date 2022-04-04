import { style } from '@vanilla-extract/css'
import { MediaQueries } from 'client/src/common/constants/media'

import { gridAtom, vars } from 'client/src/common/styles'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'

export const wrapper = style([
  surfaces.glass,
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
  margin: `0 ${vars.space.s3}`,
})

export const search = style({
  maxWidth: '32rem',
  margin: '0 auto',
})

export const navigationMenu = style({
  marginLeft: vars.space.s3,
})
