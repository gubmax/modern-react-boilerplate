import { composeStyles, style } from '@vanilla-extract/css'

import { vars, theme, gridAtom } from 'src/styles'

export const wrapper = gridAtom({
  display: 'flex',
})

export const body = gridAtom({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const imageBox = composeStyles(
  gridAtom({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  style({
    flexShrink: 0,
    width: '8rem',
    height: '8rem',
    fontSize: '5rem',
    borderRadius: '12px',
    marginRight: vars.space.primary,
    backgroundColor: theme.color.bg0,
    userSelect: 'none',
  }),
)

export const price = composeStyles(
  gridAtom({
    marginLeft: 'auto',
  }),
  style({
    minWidth: '3.5rem',
    fontSize: vars.fontSize.h3,
    fontWeight: 500,
    textAlign: 'end',
  }),
)

export const counter = composeStyles(
  gridAtom({
    alignSelf: 'center',
  }),
  style({
    width: '2.5rem',
    textAlign: 'center',
    fontSize: vars.fontSize.h3,
  }),
)

export const marginLeft = gridAtom({
  marginLeft: 'auto',
})

export const deleteButton = composeStyles(
  gridAtom({
    alignItems: 'center',
  }),
  style({
    marginRight: vars.space.secondary,
  }),
)
