import { createAtomicStyles, createAtomsFn } from '@vanilla-extract/sprinkles'

const gridStyles = createAtomicStyles({
  properties: {
    display: ['flex', 'inline-flex'],
    flexDirection: ['column', 'row'],
    justifyContent: ['center', 'space-between'],
    alignItems: ['center'],
    alignSelf: ['center'],
    marginLeft: ['auto'],
    marginRight: ['auto'],
  },
  shorthands: {
    marginX: ['marginLeft', 'marginRight'],
  },
})

export const gridAtom = createAtomsFn(gridStyles)
