import { lazy, FC, Suspense } from 'react'

import { H1, H2 } from 'src/components/typography'
import { MOCK_PRODUCTS } from './products.mock'

const Cart = lazy(() => import('src/components/composites/Cart/cart.chunk'))

const CartPage: FC = () => {
  return (
    <>
      <H1>Shopping Cart</H1>
      <Suspense fallback={<H2>⏳ Loading...</H2>}>
        <Cart goods={MOCK_PRODUCTS} />
      </Suspense>
    </>
  )
}

export default CartPage
