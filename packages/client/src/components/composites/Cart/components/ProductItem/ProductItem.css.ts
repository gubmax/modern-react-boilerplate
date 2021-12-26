import { style } from '@vanilla-extract/css'

import { vars, theme, gridAtom } from 'client/src/common/styles'

export const wrapper = gridAtom({ display: 'flex' })

export const marginRight = style({ marginRight: vars.space.s3 })

export const body = style([wrapper, gridAtom({ flexDirection: 'column' }), { width: '100%' }])

export const header = style([wrapper, { marginBottom: vars.space.s1 }])

export const footer = style([
  wrapper,
  gridAtom({ justifyContent: 'flex-end' }),
  { marginTop: 'auto' },
])

export const imageBox = style([
  marginRight,
  gridAtom({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  {
    flexShrink: 0,
    width: '8rem',
    height: '8rem',
    fontSize: '5rem',
    borderRadius: '12px',
    backgroundColor: theme.color.bg0,
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
