import { lazy, FC, Suspense } from 'react'

const Cart = lazy(() => import('src/components/composites/Cart/chunk-cart'))

const CartPage: FC = () => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <Cart />
      </Suspense>
    </div>
  )
}

export default CartPage
