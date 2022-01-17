import { HTMLAttributes } from 'react'

import { StyledProps, AsProp, RefProp } from 'client/src/common/typings'
import { WrapperVariants } from './Wrapper.constants'

type WrapperHtmlElements = HTMLDivElement & HTMLUListElement & HTMLLIElement
type WrapperTags = 'div' | 'main' | 'ul' | 'li' | 'section'

export interface BaseWrapperProps
  extends StyledProps,
    AsProp<WrapperTags>,
    RefProp<WrapperHtmlElements>,
    HTMLAttributes<WrapperHtmlElements> {
  variant: WrapperVariants
}

export type WrapperProps = Omit<BaseWrapperProps, 'variant'>
