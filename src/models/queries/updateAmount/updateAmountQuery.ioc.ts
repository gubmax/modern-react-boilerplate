import { ContainerModule } from 'inversify'

import { UpdateAmountQueryModel } from './updateAmountQuery.model'

export const updateAmountQueryModelSymbol = Symbol('UpdateAmountQueryModel')

export type { UpdateAmountQueryModel }

export const UpdateAmountQueryModule = new ContainerModule((bind) => {
  bind<UpdateAmountQueryModel>(updateAmountQueryModelSymbol).to(UpdateAmountQueryModel)
})
