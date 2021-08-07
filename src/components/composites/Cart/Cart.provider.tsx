import { Product } from 'src/domain/entities'
import { providerFactory } from 'src/utils'
import { CartModel } from './models'

interface Props {
  products?: Product[]
}

interface Deps {
  cartModel: CartModel
}

export const [provide, useCartDeps] = providerFactory<Deps, Props>(({ products }) => ({
  cartModel: new CartModel(products),
}))
