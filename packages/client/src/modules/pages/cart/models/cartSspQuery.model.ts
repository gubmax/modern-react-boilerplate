import { inject, singleton } from 'tsyringe'

import { GetProductsResponse } from 'shared/http/requests'
import { ServerSidePropsQueryModel } from 'client/src/common/models/queries/serverSideProps'
import { HttpClientModel } from 'client/src/common/models/httpClient.model'
import { getServerSideProps } from '../dataFetching'

@singleton()
export class CartSspQueryModel extends ServerSidePropsQueryModel<GetProductsResponse> {
  constructor(@inject(HttpClientModel) protected readonly httpClientModel: HttpClientModel) {
    super(getServerSideProps, httpClientModel)
  }
}
