import { iocContainer } from 'client/src/utils'

import { CartService } from './domain/services'
import { CartModel } from './models'

iocContainer.bind(CartService).to(CartService)
iocContainer.bind(CartModel).to(CartModel)
