import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'
import { typography } from 'client/src/common/styles/shared/typography.css'

export const wrapper = style([
  surfaces.flat,
  {
    padding: dt.vars.space.s1,
    fontWeight: 500,
    flexGrow: 1,
    borderRadius: dt.vars.border.radius.regular,
  },
])

export const header = gridAtom({
  display: 'flex',
  alignItems: 'center',
})

export const favoriteIcon = style({
  marginLeft: 'auto',
})

export const collectionAvatar = style({
  marginRight: dt.vars.space.s0,
})

export const collectionName = style({
  display: 'block',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const username = style({
  color: dt.vars.theme.color.secondary,
  display: 'block',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const imageBox = style({
  flexShrink: 0,
  width: '100%',
  height: pxToRem(224),
  borderRadius: dt.vars.border.radius.regular,
  boxShadow: `0 0 0 ${dt.vars.border.width.regular} ${dt.vars.color.transparentBorder}`,
})

export const itemInfo = style({
  position: 'relative',
  padding: `${dt.vars.space.s1} 0 ${dt.vars.space.s0}`,
  borderRadius: dt.vars.border.radius.regular,
})

export const footer = style([
  gridAtom({
    display: 'flex',
  }),
])

export const timer = typography.subtitle1

export const cost = style({
  marginLeft: 'auto',
})

export const hint = style([
  typography.subtitle1,
  {
    color: dt.vars.theme.color.secondary,
  },
])

export const title = style({
  display: 'block',
  marginBottom: dt.vars.space.s0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})
