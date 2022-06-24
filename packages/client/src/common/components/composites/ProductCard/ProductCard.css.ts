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

export const icon = style({
  width: '75%',
  height: '75%',
})

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

export const productCardBg0 = style({ backgroundColor: '#ffadad' })
export const productCardBg1 = style({ backgroundColor: '#ffd6a5' })
export const productCardBg2 = style({ backgroundColor: '#fdffb6' })
export const productCardBg3 = style({ backgroundColor: '#caffbf' })
export const productCardBg4 = style({ backgroundColor: '#9bf6ff' })
export const productCardBg5 = style({ backgroundColor: '#a0c4ff' })
export const productCardBg6 = style({ backgroundColor: '#bdb2ff' })
export const productCardBg7 = style({ backgroundColor: '#ffc6ff' })

export const productCardIcon0 = style({ fill: '#ff9494' })
export const productCardIcon1 = style({ fill: '#ffc37a' })
export const productCardIcon2 = style({ fill: '#e9ec93' })
export const productCardIcon3 = style({ fill: '#a7f098' })
export const productCardIcon4 = style({ fill: '#75e5f0' })
export const productCardIcon5 = style({ fill: '#80b0ff' })
export const productCardIcon6 = style({ fill: '#a899ff' })
export const productCardIcon7 = style({ fill: '#ffa8ff' })
