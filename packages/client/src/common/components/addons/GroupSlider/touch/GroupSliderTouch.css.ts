import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'
import { hideScrollbar } from 'client/src/common/styles/shared/hideScrollbar.css'
import { typography } from 'client/src/common/styles/shared/typography.css'

export const wrapper = style([
  gridAtom({ display: 'flex' }),
  hideScrollbar,
  {
    margin: `0 calc(-1 * ${dt.vars.space.s1})`,
    overflowX: 'auto',
    overscrollBehaviorX: 'contain',
    scrollBehavior: 'smooth',
    scrollPadding: '0',
    scrollSnapType: 'x mandatory',
  },
])

export const title = style([
  typography.h2,
  {
    marginBottom: dt.vars.space.s1,
  },
])

export const item = style({
  maxWidth: pxToRem(310),
  paddingLeft: dt.vars.space.s1,
  scrollSnapAlign: 'center',
  width: '100%',

  ':last-of-type': {
    paddingRight: dt.vars.space.s1,
  },
})
