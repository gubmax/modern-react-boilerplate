import { ApiRoutes, HttpRequestMethods } from '../constants'
import { HttpRequestInit } from '../types'
import { JSONPatch, JSONPatchOperations } from '../jsonPatch'

export enum UpdateAmountPaths {
  increase = '/increase',
  decrease = '/decrease',
}

export type UpdateAmountDto = JSONPatch<
  { id: string },
  JSONPatchOperations.replace,
  UpdateAmountPaths,
  never
>

export const updateAmountInit: HttpRequestInit<ApiRoutes> = {
  input: ApiRoutes.CART_AMOUNT,
  method: HttpRequestMethods.PATCH,
}
