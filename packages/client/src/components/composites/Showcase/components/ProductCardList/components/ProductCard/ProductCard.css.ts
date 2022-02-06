import { style } from '@vanilla-extract/css'

import { gridAtom, vars, palette } from 'client/src/common/styles'

export const wrapper = style({
  flexGrow: 1,
  minWidth: '12rem',
  padding: 0,
  background: palette.color.surface0,
  cursor: 'pointer',
})

export const imageBox = style([
  gridAtom({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  {
    flexShrink: 0,
    width: '100%',
    height: '12rem',
    fontSize: '8rem',
    borderRadius: vars.borderRadius.primary,
    userSelect: 'none',
  },
])

export const info = style({
  position: 'relative',
})

export const cost = style({
  position: 'absolute',
  right: vars.space.s1,
  top: '-1.25rem',
})
