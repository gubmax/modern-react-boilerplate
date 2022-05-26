import { ApiRoutes, HttpRequestMethods } from '../constants'
import { JSONPatch } from '../jsonPatch'
import { HttpRequestInit } from '../types'

export enum UpdateAmountPaths {
  increase = '/increase',
  decrease = '/decrease',
}

export type UpdateAmountBody = JSONPatch<{ id: string }, UpdateAmountPaths, never>

export const updateAmountInit: HttpRequestInit<ApiRoutes> = {
  input: ApiRoutes.CART_AMOUNT,
  method: HttpRequestMethods.PATCH,
}
