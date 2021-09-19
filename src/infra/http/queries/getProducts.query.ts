import { getProductsInit, GetProductsResponse } from 'shared/http'
import { HttpQueryModel } from 'src/models'

export class GetProductsQuery extends HttpQueryModel<GetProductsResponse> {
  init = getProductsInit
}
