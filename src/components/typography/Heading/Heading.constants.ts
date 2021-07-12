import * as s from './Heading.css'

export enum HeadingTags {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
}

export const stylesByTag = new Map([
  [HeadingTags.H1, s.h1],
  [HeadingTags.H2, s.h2],
  [HeadingTags.H3, s.h3],
])
