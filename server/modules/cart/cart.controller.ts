import { RequestHandler } from 'express'

import { JSONPatchOperations } from '../../utils/jsonPatch'
import { CartService } from './cart.service'
import { UpdateAmountBody } from './cart.types'

class CartController {
  cartService: CartService

  constructor() {
    this.cartService = new CartService()
  }

  updateAmount: RequestHandler<never, void, UpdateAmountBody> = ({ body }, res) => {
    try {
      if (body.op === JSONPatchOperations.replace) {
        if (body.path === '/increase') {
          this.cartService.increaseAmount(body.value?.id || '')
        } else if (body.path === '/decrease') {
          this.cartService.decreaseAmount(body.value?.id || '')
        }
      }

      res.sendStatus(200)
    } catch (error: unknown) {
      res.sendStatus(500)
    }
  }
}

export default new CartController()
