import { lazy, FC, Suspense } from 'react'

import { PageLoader } from 'src/components/layout'
import { H1 } from 'src/components/typography'
import { useServerSideProps, useServerSidePropsLoader } from 'src/hooks'
import { getServerSideProps } from './Cart.server'

const Cart = lazy(() => import('src/components/composites/Cart/cart.chunk'))

const CartPage: FC = () => {
  const { products } = useServerSideProps()
  const [loading, res] = useServerSidePropsLoader(getServerSideProps)

  return (
    <>
      <H1>Shopping Cart</H1>
      <Suspense fallback={<PageLoader />}>
        <Cart loading={loading} products={res?.products || products} />
      </Suspense>
    </>
  )
}

export default CartPage
