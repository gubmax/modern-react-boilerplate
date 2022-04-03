import { inject, singleton } from 'tsyringe'

import { UpdateAmountBody, updateAmountInit } from 'shared/http/requests'
import { HttpClientModel } from '../../httpClient.model'
import { HttpQueryModel } from '../httpQuery'

@singleton()
export class UpdateAmountQueryModel extends HttpQueryModel<void, UpdateAmountBody> {
  constructor(@inject(HttpClientModel) protected readonly httpClientModel: HttpClientModel) {
    super(httpClientModel, updateAmountInit)
  }
}
