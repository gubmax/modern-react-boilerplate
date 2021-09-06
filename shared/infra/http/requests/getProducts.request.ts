import { Product } from 'src/domain/entities'
import { ApiRoutes, HttpRequestMethods } from '../constants'
import { HttpRequestInit } from '../types'

export interface GetProductsResponse {
  products: Product[]
}

export const getProductsInit: HttpRequestInit = {
  input: ApiRoutes.CART_PRODUCTS,
  method: HttpRequestMethods.GET,
}
