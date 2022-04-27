import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'
import { typography } from 'client/src/common/styles/shared/typography.css'

export const wrapper = style([
  gridAtom({ display: 'flex' }),
  {
    padding: `${dt.vars.space.s2} ${dt.vars.space.s3}`,
    borderRadius: dt.vars.borderRadius.primary,
  },
])

export const title = style([
  typography.h3,
  {
    marginRight: dt.vars.space.s3,
  },
])

export const body = style([
  gridAtom({ display: 'flex', flexDirection: 'column' }),
  { width: '100%' },
])

export const header = style([gridAtom({ display: 'flex' }), { marginBottom: dt.vars.space.s1 }])

export const footer = style([
  gridAtom({ display: 'flex', justifyContent: 'flex-end' }),
  { marginTop: 'auto' },
])

export const imageBox = style([
  gridAtom({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  {
    flexShrink: 0,
    width: pxToRem(112),
    height: pxToRem(112),
    marginRight: dt.vars.space.s3,
    fontSize: pxToRem(68),
    borderRadius: dt.vars.borderRadius.primary,
    backgroundColor: dt.vars.theme.color.bg0,
    userSelect: 'none',
  },
])

export const price = style([
  gridAtom({ marginLeft: 'auto' }),
  {
    minWidth: pxToRem(56),
    fontSize: dt.vars.fontSize.h3,
    fontWeight: 500,
    textAlign: 'end',
  },
])

export const counter = style([
  gridAtom({ alignSelf: 'center' }),
  {
    width: pxToRem(36),
    textAlign: 'center',
    fontSize: dt.vars.fontSize.h3,
  },
])

export const deleteButton = gridAtom({ marginRight: 'auto' })
