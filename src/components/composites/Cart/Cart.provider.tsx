import { providerFactory } from 'src/utils'
import { Product } from './models'
import { CartService } from './services'

interface Props {
  goods?: Product[]
}

interface Deps {
  cartService: CartService
}

export const [provide, useDeps] = providerFactory<Deps, Props>(({ goods }) => ({
  cartService: new CartService(goods),
}))
