import { lazy, FC, Suspense } from 'react'

import { PageLoader } from 'src/components/composites'
import { H1 } from 'src/components/typography'
import { useDocumentTitle, useServerSideProps, useServerSidePropsLoader } from 'src/common/hooks'
import { getServerSideProps } from './Cart.server'

const Cart = lazy(() => import('src/components/composites/Cart/cart.chunk'))

const PAGE_TITLE = 'Shopping Cart'

const CartPage: FC = () => {
  useDocumentTitle(PAGE_TITLE)

  const { products } = useServerSideProps()
  const [loading, res] = useServerSidePropsLoader(getServerSideProps)

  return (
    <>
      <H1>{PAGE_TITLE}</H1>
      <Suspense fallback={<PageLoader />}>
        <Cart loading={loading} products={res?.products || products} />
      </Suspense>
    </>
  )
}

export default CartPage
