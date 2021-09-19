import { UpdateAmountBody, updateAmountInit } from 'shared/http'
import { HttpQueryModel } from 'src/models'

class UpdateAmountQuery extends HttpQueryModel<void, UpdateAmountBody> {
  init = updateAmountInit
}

export default new UpdateAmountQuery()
