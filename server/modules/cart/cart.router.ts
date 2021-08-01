import { Router } from 'express'

import { default as CartController } from './cart.controller'

const cartRouter = Router()

cartRouter.patch('/cart/amount', CartController.updateAmount)

export default cartRouter
