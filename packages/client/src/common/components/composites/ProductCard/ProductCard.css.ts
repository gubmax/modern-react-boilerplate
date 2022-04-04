import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'

export const wrapper = style([
  surfaces.base,
  {
    flexGrow: 1,
    maxWidth: '16rem',
    padding: 0,
    background: dt.vars.theme.color.surface0,
  },
])

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
    borderRadius: dt.vars.borderRadius.primary,
    userSelect: 'none',
  },
])

export const info = style([
  surfaces.base,
  {
    position: 'relative',
  },
])

export const cost = style({
  position: 'absolute',
  right: dt.vars.space.s1,
  top: '-1.25rem',
})

export const title = style({
  display: 'block',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
})

export const productCardBg0 = style({
  background: 'linear-gradient(-45deg, #faca12, #f97915)',
})

export const productCardBg1 = style({
  background: 'linear-gradient(-45deg, #39bbf7, #616af1)',
})

export const productCardBg2 = style({
  background: 'linear-gradient(-45deg, #ec4898, #f43e5f)',
})

export const productCardBg3 = style({
  background: 'linear-gradient(-45deg, #48dd82, #19b6c2)',
})
