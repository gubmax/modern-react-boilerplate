import { recipe } from '@vanilla-extract/recipes'

import { vars } from 'client/src/common/styles'

export const heading = recipe({
  base: {
    display: 'inline-block',
    letterSpacing: '0.05rem',
  },

  variants: {
    type: {
      h1: {
        marginBottom: vars.space.s3,
        fontSize: vars.fontSize.h1,
        fontWeight: 500,
        letterSpacing: 0.25,
      },
      h2: {
        marginBottom: vars.space.s2,
        fontSize: vars.fontSize.h2,
        fontWeight: 500,
        letterSpacing: 0,
      },
      h3: {
        fontSize: vars.fontSize.h3,
        letterSpacing: 0.15,
      },
    },
  },
})
