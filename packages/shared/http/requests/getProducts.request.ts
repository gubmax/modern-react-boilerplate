import { ApiRoutes, HttpRequestMethods } from '../constants'
import { HttpRequestInit } from '../types'

export enum ProductVariant {
  bg0 = 'bg0',
  bg1 = 'bg1',
  bg2 = 'bg2',
  bg3 = 'bg3',
  bg4 = 'bg4',
  bg5 = 'bg5',
  bg6 = 'bg6',
  bg7 = 'bg7',
}

export interface ProductDto {
  id: string
  variant: ProductVariant
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
