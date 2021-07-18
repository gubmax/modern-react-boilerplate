import { lazy, FC, Suspense } from 'react'

import { H1, H2 } from 'src/components/typography/Heading'

const Cart = lazy(() => import('src/components/composites/Cart/chunk-cart'))

const CartPage: FC = () => {
  return (
    <>
      <H1>Shopping Cart</H1>
      <Suspense fallback={<H2>⏳ Loading...</H2>}>
        <Cart />
      </Suspense>
    </>
  )
}

export default CartPage
