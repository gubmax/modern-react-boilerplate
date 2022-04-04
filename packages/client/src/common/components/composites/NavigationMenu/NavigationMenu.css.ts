import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'

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
