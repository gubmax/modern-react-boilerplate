import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'

export const page = style({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'min-content 1fr 1fr',
  gridTemplateRows: `${pxToRem(70)} 1fr 1fr`,
  gridTemplateAreas: `
    "aside header header"
    "aside main main"
    "aside main main"
  `,
  minWidth: dt.vars.size.screen.tablet,
  maxWidth: dt.vars.size.screen.desktop,
  minHeight: '100vh',
  margin: '0 auto',
})

export const header = style({
  position: 'sticky',
  gridArea: 'header',
  top: 0,
  paddingRight: dt.vars.space.s4,
  zIndex: 1,

  '@media': {
    [dt.media.maxWidth.tablet]: {
      paddingRight: dt.vars.space.s3,
    },
  },
})

export const logo = style({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  height: pxToRem(70),
  paddingRight: dt.vars.space.s2,
  margin: `0 0 ${dt.vars.space.s4} ${dt.vars.space.s2}`,
  borderBottom: `${pxToRem(1.25)} solid ${dt.vars.theme.color.border}`,
})

export const main = style({
  gridArea: 'main',
  width: '100%',
  padding: `${dt.vars.space.s4} ${dt.vars.space.s4} ${dt.vars.space.s4} ${dt.vars.space.s3}`,
  zIndex: 0,

  '@media': {
    [dt.media.maxWidth.tablet]: {
      padding: `${dt.vars.space.s3} ${dt.vars.space.s3} ${dt.vars.space.s4} ${dt.vars.space.s3}`,
    },
  },
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
    height: '100vh',
    padding: `0 0 ${dt.vars.space.s2} ${dt.vars.space.s4}`,

    '@media': {
      [dt.media.maxWidth.tablet]: {
        padding: `0 0 ${dt.vars.space.s2} ${dt.vars.space.s3}`,
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
