import { RequestHandler } from 'express'

import { JSONPatchOperations, UpdateAmountBody, UpdateAmountPaths } from 'shared/infra/http'
import { CartService } from './cart.service'

export class CartController {
  cartService: CartService

  constructor({ cartService }: { cartService: CartService }) {
    this.cartService = cartService
  }

  updateAmount: RequestHandler<never, string, UpdateAmountBody> = ({ body }, res) => {
    const { op, path, value } = body
    try {
      if (op === JSONPatchOperations.replace) {
        if (path === UpdateAmountPaths.increase) {
          this.cartService.increaseAmount(value?.id || '')
        } else if (path === UpdateAmountPaths.decrease) {
          this.cartService.decreaseAmount(value?.id || '')
        }

        return res.status(200).json('success')
      }

      throw Error('Unexpected operation')
    } catch (error: unknown) {
      res.status(500).json('failure')
    }
  }
}
