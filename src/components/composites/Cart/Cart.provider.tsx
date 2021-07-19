import { createContext } from 'react'

import { provideContext } from 'src/utils'
import { CartService } from './services'
import { MOCK_PRODUCTS } from './products.mock'

const providedValue = {
  cartService: new CartService(MOCK_PRODUCTS),
}

export const CartContext = createContext(providedValue)
export const provideCartContext = provideContext(CartContext, providedValue)
