import { style } from '@vanilla-extract/css'

import { MediaQueries } from 'client/src/common/constants/media'
import { gridAtom, vars } from 'client/src/common/styles'

export const wrapper = style({
  background: 'linear-gradient(-45deg, #a655f6, #6565f1)',
})

export const title = style({
  marginBottom: vars.space.s0,
  color: vars.color.white,
})

export const subtitle = style({
  marginBottom: vars.space.s3,
  color: vars.color.white,
})

export const buttonsGroup = gridAtom({
  display: 'flex',
})

export const button = style({
  marginRight: vars.space.s1,
  width: '100%',
  minWidth: 'unset',

  ':last-child': { marginRight: 0 },

  '@media': {
    [MediaQueries.MIN_WIDTH_MOBILE]: {
      width: 'unset',
      minWidth: '10rem',
    },
  },
})
