import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'

export const text = style([
  dt.style.focusVisible.primary,
  gridAtom({ display: 'inline-flex', alignItems: 'center' }),
  {
    height: pxToRem(58),
    marginBottom: 0,
    marginLeft: `calc(-1 * ${dt.vars.space.s0})`,
    padding: dt.vars.space.s1,
    fontSize: dt.vars.fontSize.h2,
    fontWeight: 500,
    whiteSpace: 'nowrap',
    borderRadius: dt.vars.border.radius.regular,

    '@media': {
      [dt.media.maxWidth.mobile]: { height: pxToRem(48) },
    },
  },
])

export const title = style({
  display: 'none',

  '@media': {
    [dt.media.minWidth.tablet]: { display: 'unset' },
  },
})

const borderRadius = pxToRem(8)
const posDesktop = `-${pxToRem(4)}`

export const highlight = style({
  position: 'relative',
  display: 'inline-block',
  width: pxToRem(32),
  marginRight: dt.vars.space.s1,
  textAlign: 'center',
  lineHeight: 1.25,
  color: dt.vars.color.white,
  borderRadius,
  zIndex: 0,

  ':before': {
    content: '""',
    position: 'absolute',
    top: posDesktop,
    bottom: posDesktop,
    left: posDesktop,
    right: posDesktop,
    borderRadius,
    transform: 'rotate(6deg)',
    background: dt.vars.theme.gradient.accent,
    zIndex: -1,
  },

  '@media': {
    [dt.media.maxWidth.tablet]: { marginRight: 'unset' },
  },
})
