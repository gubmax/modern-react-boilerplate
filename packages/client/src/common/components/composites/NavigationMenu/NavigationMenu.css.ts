import { style } from '@vanilla-extract/css'

import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = gridAtom({ display: 'flex' })

export const icon = style({
  '@media': {
    [dt.media.minWidth.mobile]: {
      marginRight: dt.vars.space.s2,

      ':last-child': {
        marginRight: 0,
      },
    },
  },
})
