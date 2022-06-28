import { ElementType } from 'react'

import { StyledProps } from 'client/src/common/typings'
import { ProductVariant } from 'shared/http/requests/getProducts.request'

export interface MockProduct {
  bg: string
  fill: string
  icon: ElementType
}

export interface MockProductProps extends StyledProps {
  variant: ProductVariant
}
