import { style } from '@vanilla-extract/css'
import { MediaQueries } from 'client/src/common/constants/media'
import { vars } from 'client/src/common/styles'

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  padding: vars.space.s1,

  '@media': {
    [MediaQueries.MIN_WIDTH_MOBILE]: {
      padding: 0,
    },
  },
})

export const text = style({
  display: 'none',
  whiteSpace: 'nowrap',

  '@media': {
    [MediaQueries.MIN_WIDTH_MOBILE]: {
      display: 'unset',
      marginTop: '0.25rem',
      fontSize: vars.fontSize.secondary,
    },
  },
})
