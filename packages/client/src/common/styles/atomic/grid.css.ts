import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

const gridStyles = defineProperties({
  properties: {
    display: ['flex', 'inline-flex'],
    flexDirection: ['column', 'row'],
    flexGrow: [1],
    flexShrink: [0],
    flexWrap: ['wrap'],
    justifyContent: ['center', 'space-around', 'space-between', 'flex-start', 'flex-end'],
    alignItems: ['center'],
    alignSelf: ['center'],
    marginTop: ['auto'],
    marginRight: ['auto'],
    marginLeft: ['auto'],
  },
  shorthands: {
    marginX: ['marginLeft', 'marginRight'],
  },
})

export const gridAtom = createSprinkles(gridStyles)
