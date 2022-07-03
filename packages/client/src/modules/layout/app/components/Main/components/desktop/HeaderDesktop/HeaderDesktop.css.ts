import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'

export const wrapper = style([
  surfaces.glass,
  {
    background: dt.vars.theme.color.transparentBg0,
  },
])

export const bar = style([
  gridAtom({
    display: 'flex',
    alignItems: 'center',
    marginX: 'auto',
  }),
  {
    width: 'inherit',
    height: pxToRem(64),
    maxWidth: dt.vars.size.screen.desktop,
    padding: `0 ${dt.vars.space.s4}`,
  },
])

export const linkWrapper = style([
  gridAtom({ flexShrink: 0 }),
  {
    width: pxToRem(244),

    '@media': {
      [dt.media.maxWidth.tablet]: {
        width: 'unset',
      },
    },
  },
])

export const search = style({
  margin: `0 ${dt.vars.space.s3}`,
})

export const navigationMenu = style({
  justifySelf: 'flex-end',
  marginLeft: 'auto',
})
