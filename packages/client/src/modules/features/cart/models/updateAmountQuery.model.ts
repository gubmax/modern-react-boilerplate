import { inject, singleton } from 'tsyringe'

import { UpdateAmountBody, updateAmountInit } from 'shared/http/requests/updateAmount.request'
import { HttpClientModel } from '../../../../common/models/httpClient.model'
import { HttpQueryModel } from '../../../../common/models/queries/httpQuery'

@singleton()
export class UpdateAmountQueryModel extends HttpQueryModel<void, UpdateAmountBody> {
  constructor(@inject(HttpClientModel) protected readonly httpClientModel: HttpClientModel) {
    super(httpClientModel, updateAmountInit)
  }
}
