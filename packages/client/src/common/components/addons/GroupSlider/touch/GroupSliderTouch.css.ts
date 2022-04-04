import { globalStyle, style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { scrollbar } from 'client/src/common/styles/shared/scrollbar.css'

export const wrapper = style([
  gridAtom({ display: 'flex' }),
  scrollbar,
  {
    overflowX: 'auto',
    overscrollBehaviorX: 'contain',
    paddingBottom: dt.vars.space.s2,
    scrollBehavior: 'smooth',
    scrollPadding: '0',
    scrollSnapType: 'x mandatory',
  },
])

globalStyle(`${wrapper} > *`, { scrollSnapAlign: 'start' })
