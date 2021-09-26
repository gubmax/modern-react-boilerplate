import { ContainerModule } from 'inversify'

import { CartModel } from './cart.model'

export const cartModelSymbol = Symbol('CartModel')

export type { CartModel }

export const CartModelModule = new ContainerModule((bind) => {
  bind<CartModel>(cartModelSymbol).to(CartModel)
})
