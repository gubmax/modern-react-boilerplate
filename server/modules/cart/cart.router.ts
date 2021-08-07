import { Router } from 'express'

import { updateAmountInit } from 'shared/infra/http'
import { cartProvider } from './cart.provider'

export const cartRouter = Router()

cartRouter.patch(updateAmountInit.input, cartProvider.updateAmount)
