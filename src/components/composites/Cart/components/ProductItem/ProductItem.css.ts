import { style } from '@vanilla-extract/css'

import { vars, theme, gridAtom } from 'src/styles'

export const wrapper = gridAtom({ display: 'flex' })

export const body = style([
  gridAtom({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),
  { width: '100%' },
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
    fontSize: '5rem',
    borderRadius: '12px',
    marginRight: vars.space.s3,
    backgroundColor: theme.color.bg0,
    userSelect: 'none',
  },
])

export const price = style([
  gridAtom({ marginLeft: 'auto' }),
  {
    minWidth: '3.5rem',
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

export const marginLeft = gridAtom({
  marginLeft: 'auto',
})

export const deleteButton = style([
  gridAtom({ alignItems: 'center' }),
  { marginRight: vars.space.s2 },
])
