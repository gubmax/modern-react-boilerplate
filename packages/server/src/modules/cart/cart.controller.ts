import { Body, Controller, Get, Inject, Patch } from '@nestjs/common'

import { BadRequestException } from 'shared/exceptions'
import { ApiRoutes } from 'shared/http/constants'
import { JSONPatchOperations } from 'shared/http/jsonPatch'
import type { GetProductsResponse, UpdateAmountBody } from 'shared/http/requests'
import { UpdateAmountPaths } from 'shared/http/requests'
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
  updateAmount(@Body() { op, path, value }: UpdateAmountBody): Promise<Error | void> {
    if (op !== JSONPatchOperations.replace) {
      throw new BadRequestException('Unexpected operation')
    }

    const { id = '' } = value ?? {}

    return {
      [UpdateAmountPaths.increase]: () => this.cartService.increaseAmount(id),
      [UpdateAmountPaths.decrease]: () => this.cartService.decreaseAmount(id),
    }[path]()
  }
}
