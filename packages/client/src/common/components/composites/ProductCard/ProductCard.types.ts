import { StyledProps } from 'client/src/common/typings'
import { ProductVariant } from 'shared/http/requests/getProducts.request'

export interface ProductCardProps extends StyledProps {
  variant: ProductVariant
  price: number
  onClick?: () => void
}
