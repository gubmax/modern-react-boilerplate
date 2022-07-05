import { ProductVariant } from 'shared/http/requests/getProducts.request'

export interface Product {
  id: string
  amount: number
  price: number
  title: string
  variant: ProductVariant
}
