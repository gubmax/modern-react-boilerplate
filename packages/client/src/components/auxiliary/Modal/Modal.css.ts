import { style } from '@vanilla-extract/css'

import { MediaQueries } from 'client/src/common/constants/media'
import { ScreenSizes } from 'client/src/common/constants/screen'
import { glassBackgroundStyle, theme, vars } from 'client/src/common/styles'

export const noScroll = style({
  overflow: 'hidden',
})

export const background = style([
  glassBackgroundStyle,
  {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: theme.color.transparentBg0,
    backdropFilter: 'blur(0.5rem)',
    overflowY: 'auto',
    willChange: 'scroll-position',
    zIndex: 1,
  },
])

export const wrapper = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  minHeight: '24rem',
  maxWidth: ScreenSizes.TABLET,
  margin: '0 auto',
  padding: 0,
  border: `0.1rem solid ${theme.color.borderLight}`,
  borderRadius: `${vars.borderRadius.primary} ${vars.borderRadius.primary} 0 0`,
  overflow: 'hidden',

  '@media': {
    [MediaQueries.MIN_WIDTH_MOBILE]: {
      top: vars.space.s4,
      bottom: 'unset',
      left: vars.space.s4,
      right: vars.space.s4,
      minHeight: 'unset',
      borderRadius: vars.borderRadius.primary,
    },
  },
})

export const header = style({
  padding: `${vars.space.s0} ${vars.space.s3}`,
  background: theme.color.borderLight,
})

export const body = style({
  padding: vars.space.s3,
})

export const closeButton = style({
  marginLeft: 'auto',
})
