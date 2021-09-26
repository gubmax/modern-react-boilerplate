import { iocContainer } from 'src/utils'
import { CartServiceModule } from './domain/services'
import { CartModelModule } from './models'

iocContainer.load(CartServiceModule)
iocContainer.load(CartModelModule)
