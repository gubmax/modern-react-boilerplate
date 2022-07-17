import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style({
  backgroundColor: '#7f53ac',
  backgroundImage: 'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)',
  padding: `${dt.vars.space.s2} ${dt.vars.space.s3}`,
  borderRadius: dt.vars.border.radius.regular,
})

export const group = gridAtom({
  display: 'flex',
})

export const content = style([
  gridAtom({
    display: 'flex',
    flexDirection: 'column',
  }),
  {
    '@media': {
      [dt.media.minWidth.mobile]: { paddingRight: dt.vars.space.s3 },
    },
  },
])

export const buttonsGroup = style([gridAtom({ marginTop: 'auto' }), group])

export const title = style([
  dt.style.typography.h1,
  {
    marginBottom: dt.vars.space.s1,
    color: dt.vars.color.white,
  },
])

export const subtitle = style([
  dt.style.typography.h2,
  {
    marginBottom: dt.vars.space.s3,
    color: dt.vars.color.white,
  },
])

export const diamond = style([
  gridAtom({
    flexShrink: 0,
  }),
  {
    position: 'relative',
  },
])

export const button = style({
  marginRight: dt.vars.space.s1,
  width: '100%',
  minWidth: 'unset',

  ':last-child': { marginRight: 0 },

  '@media': {
    [dt.media.minWidth.mobile]: {
      width: 'unset',
      minWidth: pxToRem(140),
    },
  },
})
