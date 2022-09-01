import { style } from '@vanilla-extract/css'

import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'
import { hideScrollbar } from 'client/src/common/styles/shared/hideScrollbar.css'

const ITEM_PADDING = dt.vars.space.s1

export const wrapper = style([
  hideScrollbar,
  {
    overflow: 'auto hidden',
    marginLeft: `calc(-1 * ${ITEM_PADDING})`,
  },
])

export const box = gridAtom({ display: 'flex' })

export const item = style({
  width: '33.333%',
  minWidth: '33.333%',
  paddingLeft: ITEM_PADDING,

  '@media': {
    [dt.media.maxWidth.laptop]: {
      width: '50%',
      minWidth: '50%',
    },
  },
})

export const header = style([
  gridAtom({ display: 'flex', alignItems: 'center' }),
  { marginBottom: dt.vars.space.s0 },
])

export const buttonsGroup = style([
  gridAtom({ display: 'flex' }),
  { marginLeft: 'auto', marginRight: '' },
])

export const prevButton = style({
  marginRight: dt.vars.space.s0,
})
