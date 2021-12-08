import { injectable } from 'inversify'

import { UpdateAmountBody, updateAmountInit } from 'shared/http'
import { HttpQueryModel } from '../httpQuery.model'

injectable()
export class UpdateAmountQueryModel extends HttpQueryModel<void, UpdateAmountBody> {
  init = updateAmountInit
}
