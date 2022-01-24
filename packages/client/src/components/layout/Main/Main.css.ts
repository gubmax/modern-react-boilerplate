import { style } from '@vanilla-extract/css'

import { MediaQueries } from 'client/src/common/constants/media'
import { ScreenSizes } from 'client/src/common/constants/screen'
import { vars } from 'client/src/common/styles'

export const wrapper = style({
  minWidth: ScreenSizes.MIN,
  maxWidth: ScreenSizes.MAX,
  margin: '0 auto',
})

export const page = style({
  display: 'flex',
  flexFlow: 'row nowrap',
  minHeight: `calc(100vh - ${vars.sizes.headerHeight})`,
  zIndex: 0,
})

export const header = style({
  position: 'sticky',
  top: 0,
  width: '100%',
  minWidth: ScreenSizes.MIN,
  maxWidth: ScreenSizes.MAX,
  zIndex: 1,
})

const PADDING_TOP = vars.space.s4

export const main = style({
  position: 'relative',
  width: '100%',
  padding: `${PADDING_TOP} ${vars.space.s3} ${vars.space.s4}`,
  overflowX: 'hidden',
})

export const sidebar = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  flexShrink: 0,
  zIndex: 1,

  '@media': {
    [MediaQueries.MIN_WIDTH_MOBILE]: {
      position: 'sticky',
      top: `calc(${vars.sizes.headerHeight} + ${PADDING_TOP})`,
      bottom: 'unset',
      height: `calc(100vh - ${vars.sizes.headerHeight} - ${PADDING_TOP})`,
      padding: `0 ${vars.space.s3}`,
    },

    [MediaQueries.MIN_WIDTH_DESKTOP]: {
      width: '22rem',
    },
  },
})
