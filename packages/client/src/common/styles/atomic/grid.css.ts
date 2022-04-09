import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

const gridStyles = defineProperties({
  properties: {
    display: ['flex', 'inline-flex'],
    flexDirection: ['column', 'row'],
    flexShrink: [0],
    justifyContent: ['center', 'space-between', 'flex-end'],
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
