import { StyledProps } from 'client/src/common/typings'
import { ProductBackgrounds } from './ProductCardList.constants'

export type Products = Array<{
  bg: ProductBackgrounds
  icon: string
  price: number
}>

export interface ProductCardListProps extends StyledProps {
  items: Products
}
