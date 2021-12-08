import { ApiRoutes, HttpRequestMethods } from '../constants'
import { HttpRequestInit } from '../types'

export interface ProductDto {
  id: string
  icon: string
  title: string
  price: number
  amount: number
}

export interface GetProductsResponse {
  products: ProductDto[]
}

export const getProductsInit: HttpRequestInit = {
  input: ApiRoutes.CART_PRODUCTS,
  method: HttpRequestMethods.GET,
}
