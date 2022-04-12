import { globalStyle, style } from '@vanilla-extract/css'

import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'
import { scrollbar } from 'client/src/common/styles/shared/scrollbar.css'
import { typography } from 'client/src/common/styles/shared/typography.css'

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

export const title = style([
  typography.h2,
  {
    marginBottom: dt.vars.space.s1,
  },
])
