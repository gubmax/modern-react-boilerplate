import { style } from '@vanilla-extract/css'

export const hideScrollbar = style({
  scrollbarWidth: 'none',

  '::-webkit-scrollbar': {
    display: 'none',
  },
})
