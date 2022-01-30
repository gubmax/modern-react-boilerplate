import { style } from '@vanilla-extract/css'

import { palette } from '../palette.css'

export const focusStyle = style({
  position: 'relative',
  overflow: 'hidden',
  zIndex: 0,

  ':after': {
    background: palette.color.accentLight,
    borderRadius: '50%',
    content: '""',
    display: 'block',
    left: '50%',
    opacity: 0,
    paddingTop: 0,
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 0,
    zIndex: -1,
  },

  selectors: {
    '&:focus:after': {
      opacity: 1,
      paddingTop: '120%',
      width: '120%',
    },
  },
})
