import { Product } from './product.model'

export interface Cart {
  goods: Product[]
  totalPrice: number
}
