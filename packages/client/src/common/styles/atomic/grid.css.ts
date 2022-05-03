import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

const gridStyles = defineProperties({
  properties: {
    display: ['flex', 'inline-flex'],
    flexDirection: ['column', 'row'],
    flexGrow: [1],
    flexShrink: [0],
    justifyContent: ['center', 'space-between', 'flex-start', 'flex-end'],
    alignItems: ['center'],
    alignSelf: ['center'],
    marginLeft: ['auto'],
    marginRight: ['auto'],
  },
  shorthands: {
    marginX: ['marginLeft', 'marginRight'],
  },
})

export const gridAtom = createSprinkles(gridStyles)
