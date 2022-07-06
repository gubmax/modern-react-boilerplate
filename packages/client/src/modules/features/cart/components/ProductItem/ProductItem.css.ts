import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'
import { typography } from 'client/src/common/styles/shared/typography.css'

export const wrapper = style([
  gridAtom({ display: 'flex' }),
  {
    padding: `${dt.vars.space.s2} ${dt.vars.space.s3}`,
    borderRadius: dt.vars.border.radius.regular,

    '@media': {
      [dt.media.maxWidth.mobile]: {
        padding: `${dt.vars.space.s1} ${dt.vars.space.s2}`,
      },
    },
  },
])

export const title = style([
  typography.h3,
  {
    marginRight: dt.vars.space.s3,

    '@media': {
      [dt.media.maxWidth.mobile]: {
        marginRight: dt.vars.space.s1,
        fontSize: dt.vars.fontSize.subtitle1,
      },
    },
  },
])

export const body = style([
  gridAtom({ display: 'flex', flexDirection: 'column' }),
  { width: '100%' },
])

export const header = style([gridAtom({ display: 'flex' }), { marginBottom: dt.vars.space.s1 }])

export const footer = style([
  gridAtom({ display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap' }),
  { marginTop: 'auto' },
])

export const productBox = style({
  flexShrink: 0,
  width: pxToRem(112),
  height: pxToRem(112),
  marginRight: dt.vars.space.s3,
  fontSize: pxToRem(68),
  borderRadius: dt.vars.border.radius.regular,

  '@media': {
    [dt.media.maxWidth.mobile]: {
      width: pxToRem(72),
      height: pxToRem(72),
      marginRight: dt.vars.space.s1,
    },
  },
})

export const price = style([
  gridAtom({ marginLeft: 'auto', flexShrink: 0 }),
  typography.subtitle1,
  {
    minWidth: pxToRem(72),
    textAlign: 'end',
    lineHeight: '1.5',
  },
])

export const amount = style([
  gridAtom({ alignSelf: 'center' }),
  typography.subtitle1,
  {
    width: pxToRem(36),
    textAlign: 'center',

    '@media': {
      [dt.media.maxWidth.mobile]: {
        width: pxToRem(24),
      },
    },
  },
])

export const deleteButton = gridAtom({ marginRight: 'auto' })
