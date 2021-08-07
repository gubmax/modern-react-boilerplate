import { Body, Controller, Inject, NotImplementedException, Patch } from '@nestjs/common'

import {
  ApiRoutes,
  JSONPatchOperations,
  UpdateAmountDto,
  UpdateAmountPaths,
} from 'shared/infra/http'
import { CartService } from './cart.service'

@Controller()
export class CartController {
  constructor(@Inject(CartService) private readonly cartService: CartService) {}

  @Patch(ApiRoutes.CART_AMOUNT)
  updateAmount(@Body() { op, path, value }: UpdateAmountDto): Error | Record<never, unknown> {
    if (op === JSONPatchOperations.replace) {
      const { id = '' } = value || {}

      ;({
        [UpdateAmountPaths.increase]: () => this.cartService.increaseAmount(id),
        [UpdateAmountPaths.decrease]: () => this.cartService.decreaseAmount(id),
      }[path]())

      return {}
    }

    throw new NotImplementedException('Unexpected operation')
  }
}
