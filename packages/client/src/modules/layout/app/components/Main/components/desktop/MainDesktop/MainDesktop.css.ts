import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'

const PADDING_TOP = pxToRem(100)

export const page = style({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: `${pxToRem(244)} 1fr`,
  gridTemplateAreas: '"aside main main"',
  minWidth: dt.vars.size.screen.tablet,
  maxWidth: dt.vars.size.screen.desktop,
  minHeight: '100vh',
  margin: '0 auto',
  padding: `0 ${dt.vars.space.s4}`,

  '@media': {
    [dt.media.maxWidth.tablet]: {
      gridTemplateColumns: 'min-content 1fr',
    },
  },
})

export const header = style({
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  zIndex: 1,
  borderBottom: `${pxToRem(1)} solid ${dt.vars.theme.color.border}`,
})

export const main = style({
  gridArea: 'main',
  width: '100%',
  padding: `${PADDING_TOP} 0 ${dt.vars.space.s4} ${dt.vars.space.s3}`,
  zIndex: 0,
})

export const aside = style([
  gridAtom({
    display: 'flex',
    flexDirection: 'column',
  }),
  {
    position: 'sticky',
    gridArea: 'aside',
    top: 0,
    paddingTop: PADDING_TOP,
    height: '100vh',
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
