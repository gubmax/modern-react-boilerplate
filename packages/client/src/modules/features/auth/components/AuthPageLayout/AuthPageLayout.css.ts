import { style } from '@vanilla-extract/css'

import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'
import { focusVisiblePrimary } from 'client/src/common/styles/designTokens/style/focus.css'

export const wrapper = style([
  gridAtom({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  }),
  {
    paddingTop: dt.vars.space.s4,
    minHeight: '100vh',
  },
])

export const form = style([
  dt.style.surfaces.flat,
  {
    padding: `${dt.vars.space.s2} ${dt.vars.space.s3}`,
    borderRadius: dt.vars.border.radius.regular,
  },
])

export const logo = style([
  focusVisiblePrimary,
  gridAtom({ display: 'flex', alignItems: 'center' }),
  {
    marginBottom: dt.vars.space.s3,
    padding: dt.vars.space.s1,
    whiteSpace: 'nowrap',
    borderRadius: dt.vars.border.radius.regular,
  },
])

export const title = style([
  dt.style.typography.h2,
  {
    marginLeft: dt.vars.space.s1,
  },
])
