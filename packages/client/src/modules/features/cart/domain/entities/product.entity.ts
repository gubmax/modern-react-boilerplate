import { ProductVariant } from 'shared/http/requests/getProducts.request'

export interface Product {
  readonly id: string
  readonly amount: number
  readonly price: number
  readonly title: string
  readonly variant: ProductVariant
}
