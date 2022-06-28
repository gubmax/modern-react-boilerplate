import { inject, singleton } from 'tsyringe'

import { HttpClientModel } from 'client/src/common/models/httpClient.model'
import { ServerSidePropsQueryModel } from 'client/src/common/models/queries/serverSideProps'
import { GetProductsResponse } from 'shared/http/requests/getProducts.request'
import { getServerSideProps } from '../dataFetching'

@singleton()
export class CartSspQueryModel extends ServerSidePropsQueryModel<GetProductsResponse> {
  constructor(@inject(HttpClientModel) protected readonly httpClientModel: HttpClientModel) {
    super(getServerSideProps, httpClientModel)
  }
}
