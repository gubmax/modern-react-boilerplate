import { QueryImpl } from 'src/utils'

import { UpdateAmountDto, updateAmountInit } from 'shared/infra/http'

class UpdateAmountQuery extends QueryImpl<void, UpdateAmountDto> {
  init = updateAmountInit
}

export default new UpdateAmountQuery()
