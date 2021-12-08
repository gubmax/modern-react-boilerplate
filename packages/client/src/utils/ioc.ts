import { Container } from 'inversify'

import { HttpClientModel } from '../models/http'
import { ServerSidePropsQueryModule, UpdateAmountQueryModel } from '../models/queries'

export const iocContainer = new Container({ defaultScope: 'Singleton' })

iocContainer.load(ServerSidePropsQueryModule)
iocContainer.bind(UpdateAmountQueryModel).to(UpdateAmountQueryModel)
iocContainer.bind(HttpClientModel).to(HttpClientModel)
