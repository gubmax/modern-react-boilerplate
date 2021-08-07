import { Product } from './product.entity'

export interface Cart {
  products: Product[]
  totalPrice: number
}
