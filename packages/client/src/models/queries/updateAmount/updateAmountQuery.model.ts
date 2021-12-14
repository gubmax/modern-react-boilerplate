import { inject, singleton } from 'tsyringe'

import { UpdateAmountBody, updateAmountInit } from 'shared/http'
import { HttpQueryModel } from '../httpQuery.model'
import { HttpClientModel } from '../../http'

@singleton()
export class UpdateAmountQueryModel extends HttpQueryModel<void, UpdateAmountBody> {
  init = updateAmountInit

  constructor(@inject(HttpClientModel) protected readonly httpClientModel: HttpClientModel) {
    super(httpClientModel)
  }
}
