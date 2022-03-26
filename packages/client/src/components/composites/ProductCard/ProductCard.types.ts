import { StyledProps } from 'client/src/common/typings'
import { ProductBackgrounds } from './ProductCard.constants'

export interface ProductCardProps extends StyledProps {
  bg: ProductBackgrounds
  icon: string
  price: number
  onClick?: () => void
}
