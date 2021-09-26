import { Container } from 'inversify'

import { ServerSidePropsQueryModule, UpdateAmountQueryModule } from 'src/models/queries'

export const iocContainer = new Container({ defaultScope: 'Singleton' })

iocContainer.load(ServerSidePropsQueryModule)
iocContainer.load(UpdateAmountQueryModule)
