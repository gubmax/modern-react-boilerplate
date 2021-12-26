import { inject, singleton } from 'tsyringe'

import { GetProductsResponse } from 'shared/http'
import { ServerSidePropsQueryModel } from 'client/src/common/models/queries'
import { HttpClientModel } from 'client/src/common/models/http'
import { getServerSideProps } from '../Cart.server'

@singleton()
export class CartSspQueryModel extends ServerSidePropsQueryModel<GetProductsResponse> {
  constructor(@inject(HttpClientModel) protected readonly httpClientModel: HttpClientModel) {
    super(getServerSideProps, httpClientModel)
  }
}
