import { style } from '@vanilla-extract/css'

import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = gridAtom({ display: 'flex' })

export const icon = style({
  color: dt.vars.theme.color.secondary,
  fontWeight: 500,

  ':last-child': {
    marginRight: `calc(-1 * ${dt.vars.space.s0})`,
  },

  '@media': {
    [dt.media.maxWidth.mobile]: {
      marginRight: dt.vars.space.s0,
      ':last-child': { marginRight: 'unset' },
    },
  },
})

export const iconActive = style({
  color: dt.vars.theme.color.primary,
})
