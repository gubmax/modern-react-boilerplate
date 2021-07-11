import { HTMLAttributes } from 'react'
import { StyledProps, AsProp, RefProp } from 'src/types'

type WrapperHtmlElements = HTMLDivElement & HTMLUListElement & HTMLLIElement
type WrapperTags = 'div' | 'main' | 'ul' | 'li'

export interface WrapperProps
  extends StyledProps,
    AsProp<WrapperTags>,
    RefProp<WrapperHtmlElements>,
    HTMLAttributes<WrapperHtmlElements> {
  noPadding?: boolean
  onClick?(): void
}
