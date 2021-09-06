import { Body, Controller, Get, Inject, Patch } from '@nestjs/common'
import { InternalServerException } from 'shared/domain/exceptions'

import {
  ApiRoutes,
  GetProductsResponse,
  JSONPatchOperations,
  UpdateAmountBody,
  UpdateAmountPaths,
} from 'shared/infra/http'
import { CartService } from './cart.service'
import { MOCK_PRODUCTS } from './products.mock'

@Controller()
export class CartController {
  constructor(@Inject(CartService) private readonly cartService: CartService) {}

  @Get(ApiRoutes.CART_PRODUCTS)
  getProducts(): Error | GetProductsResponse {
    return { products: MOCK_PRODUCTS }
  }

  @Patch(ApiRoutes.CART_AMOUNT)
  updateAmount(@Body() { op, path, value }: UpdateAmountBody): Error | void {
    if (op !== JSONPatchOperations.replace) {
      throw new InternalServerException('Unexpected operation')
    }

    const { id = '' } = value || {}

    ;({
      [UpdateAmountPaths.increase]: () => this.cartService.increaseAmount(id),
      [UpdateAmountPaths.decrease]: () => this.cartService.decreaseAmount(id),
    }[path]())
  }
}
