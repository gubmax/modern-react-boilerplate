import { Product } from './product.entity'

export interface Cart {
  readonly products: Product[]
  readonly totalPrice: number
}
