import { ContainerModule } from 'inversify'

import { CartService } from './cart.service'

export const cartServiceSymbol = Symbol('CartService')

export type { CartService }

export const CartServiceModule = new ContainerModule((bind) => {
  bind<CartService>(cartServiceSymbol).to(CartService)
})
