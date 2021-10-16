import { ContainerModule } from 'inversify'

import { HttpClientModel } from './httpClient.model'

export const httpClientModelSymbol = Symbol('HttpClientModel')

export type { HttpClientModel }

export const HttpClientModule = new ContainerModule((bind) => {
  bind<HttpClientModel>(httpClientModelSymbol).to(HttpClientModel)
})
