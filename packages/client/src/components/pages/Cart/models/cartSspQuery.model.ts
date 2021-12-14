import { inject, singleton } from 'tsyringe'

import { GetProductsResponse } from 'shared/http'
import { ServerSidePropsQueryModel } from 'client/src/models/queries'
import { HttpClientModel } from 'client/src/models/http'
import { getServerSideProps } from '../Cart.server'

@singleton()
export class CartSspQueryModel extends ServerSidePropsQueryModel<GetProductsResponse> {
  constructor(@inject(HttpClientModel) protected readonly httpClientModel: HttpClientModel) {
    super(getServerSideProps, httpClientModel)
  }
}
