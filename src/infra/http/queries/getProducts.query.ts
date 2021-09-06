import { QueryImpl } from 'src/utils'

import { getProductsInit, GetProductsResponse } from 'shared/infra/http'

export class GetProductsQuery extends QueryImpl<GetProductsResponse> {
  init = getProductsInit
}
