import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'
import { typography } from 'client/src/common/styles/shared/typography.css'

export const wrapper = style({
  fontWeight: 500,
  flexGrow: 1,
  background: dt.vars.theme.color.surface0,
  borderRadius: dt.vars.borderRadius.primary,
})

export const header = style([
  gridAtom({
    display: 'flex',
    alignItems: 'center',
  }),
  {
    padding: `${dt.vars.space.s0} ${dt.vars.space.s1}`,
  },
])

export const favoriteIcon = style({
  marginLeft: 'auto',
})

export const likesCounter = style({
  whiteSpace: 'nowrap',
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

export const imageBox = style([
  gridAtom({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  {
    flexShrink: 0,
    width: '100%',
    height: pxToRem(224),
    fontSize: pxToRem(112),
    borderRadius: dt.vars.borderRadius.primary,
    userSelect: 'none',
  },
])

export const itemInfo = style({
  position: 'relative',
  padding: `${dt.vars.space.s0} ${dt.vars.space.s1} ${dt.vars.space.s1}`,
  borderRadius: dt.vars.borderRadius.primary,
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

export const title = style({
  display: 'block',
  marginBottom: dt.vars.space.s0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const productCardBg0 = style({
  backgroundColor: '#f39f86',
  backgroundImage: 'linear-gradient(315deg, #f39f86 0%, #f9d976 74%)',
})

export const productCardBg1 = style({
  backgroundColor: '#63a4ff',
  backgroundImage: 'linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%)',
})

export const productCardBg2 = style({
  backgroundColor: '#fc5296',
  backgroundImage: 'linear-gradient(315deg, #fc5296 0%, #f67062 74%)',
})

export const productCardBg3 = style({
  backgroundColor: '#70b2d9',
  backgroundImage: 'linear-gradient(315deg, #70b2d9 0%, #39e5b6 74%)',
})
