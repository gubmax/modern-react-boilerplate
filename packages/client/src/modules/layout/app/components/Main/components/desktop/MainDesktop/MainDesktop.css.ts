import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'

const PADDING_TOP = pxToRem(100)
const PADDING_BOTTOM = pxToRem(64)

export const wrapper = style({
  position: 'relative',
  minHeight: '100vh',
})

export const page = style([
  gridAtom({ display: 'flex' }),
  {
    minWidth: dt.vars.size.screen.tablet,
    maxWidth: dt.vars.size.screen.desktop,
    margin: '0 auto',
    padding: `0 ${dt.vars.space.s4}`,
  },
])

export const header = style({
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  zIndex: 1,
  borderBottom: `${pxToRem(1)} solid ${dt.vars.theme.color.border}`,
})

export const main = style({
  width: '100%',
  padding: `${PADDING_TOP} 0 ${PADDING_BOTTOM} ${dt.vars.space.s3}`,
  zIndex: 0,
  overflow: 'hidden',
})

export const aside = style([
  gridAtom({ flexShrink: 0 }),
  {
    position: 'sticky',
    top: 0,
    padding: `${PADDING_TOP} 0 ${PADDING_BOTTOM}`,
    height: '100%',

    '@media': {
      [dt.media.minWidth.tablet]: {
        width: pxToRem(244),
      },
    },
  },
])

export const submenu = style([
  gridAtom({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  {
    marginBottom: dt.vars.space.s3,
  },
])
