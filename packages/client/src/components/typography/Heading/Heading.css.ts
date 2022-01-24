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
        fontWeight: 'bold',
      },
      h2: {
        marginBottom: vars.space.s2,
        fontSize: vars.fontSize.h2,
        fontWeight: 'bold',
      },
      h3: { fontSize: vars.fontSize.h3 },
    },
  },
})
