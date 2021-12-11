import { singleton } from 'tsyringe'

import { UpdateAmountBody, updateAmountInit } from 'shared/http'
import { HttpQueryModel } from '../httpQuery.model'

singleton()
export class UpdateAmountQueryModel extends HttpQueryModel<void, UpdateAmountBody> {
  init = updateAmountInit
}
