import { style } from '@vanilla-extract/css'

import { palette, vars, gridAtom } from 'client/src/common/styles'

export const wrapper = gridAtom({ display: 'flex' })

export const title = style({ marginRight: vars.space.s3 })

export const body = style([
  gridAtom({ display: 'flex' }),
  gridAtom({ flexDirection: 'column' }),
  { width: '100%' },
])

export const header = style([gridAtom({ display: 'flex' }), { marginBottom: vars.space.s1 }])

export const footer = style([
  gridAtom({ display: 'flex' }),
  gridAtom({ justifyContent: 'flex-end' }),
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
    marginRight: vars.space.s3,
    fontSize: '5rem',
    borderRadius: '12px',
    backgroundColor: palette.color.bg0,
    userSelect: 'none',
  },
])

export const price = style([
  gridAtom({ marginLeft: 'auto' }),
  {
    minWidth: '4rem',
    fontSize: vars.fontSize.h3,
    fontWeight: 500,
    textAlign: 'end',
  },
])

export const counter = style([
  gridAtom({ alignSelf: 'center' }),
  {
    width: '2.5rem',
    textAlign: 'center',
    fontSize: vars.fontSize.h3,
  },
])

export const deleteButton = gridAtom({ marginRight: 'auto' })
