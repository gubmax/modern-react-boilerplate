import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style({
  minWidth: dt.vars.size.screen.min,
  maxWidth: dt.vars.size.screen.max,
  margin: '0 auto',
})

export const page = style({
  display: 'flex',
  flexFlow: 'row nowrap',
  minHeight: `calc(100vh - ${dt.vars.size.headerHeight})`,
  zIndex: 0,
})

export const header = style({
  position: 'sticky',
  top: 0,
  width: '100%',
  minWidth: dt.vars.size.screen.min,
  maxWidth: dt.vars.size.screen.max,
  zIndex: 1,
})

const PADDING_TOP = dt.vars.space.s2
const PADDING_BOTTOM = '5rem'

export const main = style({
  position: 'relative',
  width: '100%',
  padding: `0 ${dt.vars.space.s2} ${PADDING_BOTTOM}`,
  overflowX: 'hidden',

  '@media': {
    [dt.media.minWidth.mobile]: {
      padding: `${PADDING_TOP} ${dt.vars.space.s3} ${PADDING_BOTTOM}`,
    },

    [dt.media.minWidth.tablet]: {
      padding: `${PADDING_TOP} ${dt.vars.space.s4} ${PADDING_BOTTOM} ${dt.vars.space.s3}`,
    },
  },
})

export const sidebar = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  flexShrink: 0,
  zIndex: 1,

  '@media': {
    [dt.media.minWidth.mobile]: {
      position: 'sticky',
      top: dt.vars.size.headerHeight,
      bottom: 'unset',
      height: `calc(100vh - ${dt.vars.size.headerHeight} - ${PADDING_TOP})`,
      padding: `${PADDING_TOP} 0 0 ${dt.vars.space.s3}`,
    },

    [dt.media.minWidth.tablet]: {
      paddingLeft: dt.vars.space.s4,
    },

    [dt.media.minWidth.desktop]: {
      width: '22rem',
    },
  },
})
