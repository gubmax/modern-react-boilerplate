import { style } from '@vanilla-extract/css'

import { MediaQueries } from 'client/src/common/constants/media'
import { gridAtom, vars } from 'client/src/common/styles'

export const marginLeft = gridAtom({ marginLeft: 'auto' })

export const icon = style({
  '@media': {
    [MediaQueries.MIN_WIDTH_MOBILE]: {
      marginRight: vars.space.s2,

      ':last-child': {
        marginRight: 0,
      },
    },
  },
})
