import { HTMLAttributes } from 'react'
import { StyledProps, AsProp, RefProp } from 'client/src/common/typings'

type WrapperHtmlElements = HTMLDivElement & HTMLUListElement & HTMLLIElement
type WrapperTags = 'div' | 'main' | 'ul' | 'li' | 'section'

export interface WrapperProps
  extends StyledProps,
    AsProp<WrapperTags>,
    RefProp<WrapperHtmlElements>,
    HTMLAttributes<WrapperHtmlElements> {
  noPadding?: boolean
  onClick?(): void
}
