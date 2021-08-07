import { CartController } from './cart.controller'
import { CartService } from './cart.service'

export const cartProvider = new CartController({
  cartService: new CartService(),
})
