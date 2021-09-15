import { QueryImpl } from 'src/utils'

import { UpdateAmountBody, updateAmountInit } from 'shared/http'

class UpdateAmountQuery extends QueryImpl<void, UpdateAmountBody> {
  init = updateAmountInit
}

export default new UpdateAmountQuery()
