import { Container } from 'inversify'

import { ServerSidePropsQueryModule, UpdateAmountQueryModule } from 'src/models/queries'
import { HttpClientModule } from 'src/models/http'

export const iocContainer = new Container({ defaultScope: 'Singleton' })

iocContainer.load(ServerSidePropsQueryModule)
iocContainer.load(UpdateAmountQueryModule)
iocContainer.load(HttpClientModule)
