import { QueryImpl } from 'src/utils'

import { getProductsInit, GetProductsResponse } from 'shared/http'

export class GetProductsQuery extends QueryImpl<GetProductsResponse> {
  init = getProductsInit
}
