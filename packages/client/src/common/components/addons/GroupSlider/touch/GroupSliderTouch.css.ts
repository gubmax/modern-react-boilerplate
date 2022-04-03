import { globalStyle, style } from '@vanilla-extract/css'

import { gridAtom, scrollbar, vars } from 'client/src/common/styles'

export const wrapper = style([
  gridAtom({ display: 'flex' }),
  scrollbar,
  {
    overflowX: 'auto',
    overscrollBehaviorX: 'contain',
    paddingBottom: vars.space.s2,
    scrollBehavior: 'smooth',
    scrollPadding: '0',
    scrollSnapType: 'x mandatory',
  },
])

globalStyle(`${wrapper} > *`, { scrollSnapAlign: 'start' })
