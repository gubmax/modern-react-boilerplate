import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'
import { typography } from 'client/src/common/styles/shared/typography.css'

export const wrapper = style([gridAtom({ display: 'flex' }), surfaces.base])

export const title = style([
  typography.h3,
  {
    marginRight: dt.vars.space.s3,
  },
])

export const body = style([
  gridAtom({ display: 'flex', flexDirection: 'column' }),
  { width: '100%' },
])

export const header = style([gridAtom({ display: 'flex' }), { marginBottom: dt.vars.space.s1 }])

export const footer = style([
  gridAtom({ display: 'flex', justifyContent: 'flex-end' }),
  { marginTop: 'auto' },
])

export const imageBox = style([
  gridAtom({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  {
    flexShrink: 0,
    width: '8rem',
    height: '8rem',
    marginRight: dt.vars.space.s3,
    fontSize: '5rem',
    borderRadius: '12px',
    backgroundColor: dt.vars.theme.color.bg0,
    userSelect: 'none',
  },
])

export const price = style([
  gridAtom({ marginLeft: 'auto' }),
  {
    minWidth: '4rem',
    fontSize: dt.vars.fontSize.h3,
    fontWeight: 500,
    textAlign: 'end',
  },
])

export const counter = style([
  gridAtom({ alignSelf: 'center' }),
  {
    width: '2.5rem',
    textAlign: 'center',
    fontSize: dt.vars.fontSize.h3,
  },
])

export const deleteButton = gridAtom({ marginRight: 'auto' })
