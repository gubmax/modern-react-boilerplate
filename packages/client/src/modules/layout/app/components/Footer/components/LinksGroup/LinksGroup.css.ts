import { style } from '@vanilla-extract/css'

import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'
import { typography } from 'client/src/common/styles/shared/typography.css'

export const wrapper = style([
  gridAtom({
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  }),
  { width: '100%' },
])

export const column = style([
  gridAtom({
    display: 'flex',
    flexDirection: 'column',
  }),
  {
    marginRight: dt.vars.space.s2,
    marginBottom: dt.vars.space.s4,

    ':last-of-type': { marginRight: 'unset' },

    '@media': {
      [dt.media.maxWidth.mobile]: {
        width: '50%',
        marginRight: 'unset',
        alignItems: 'center',
      },
    },
  },
])

export const title = style([
  typography.subtitle1,
  {
    marginBottom: dt.vars.space.s3,
    fontWeight: 500,
  },
])

export const link = style({
  marginBottom: dt.vars.space.s3,

  ':last-of-type': { marginBottom: 'unset' },
})
