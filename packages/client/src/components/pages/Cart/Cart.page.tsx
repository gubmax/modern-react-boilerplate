import { lazy, FC, Suspense } from 'react'

import {
  useDocumentTitle,
  useObservableState,
  useServerSideProps,
  useServerSidePropsQueryLoader,
} from 'client/src/common/hooks'
import { PageLoader } from 'client/src/components/composites'
import { H1 } from 'client/src/components/typography'
import { getServerSideProps } from './Cart.server'
import { PAGE_TITLE } from './Cart.constants'

const Cart = lazy(() => import('client/src/components/composites/Cart/cart.chunk'))

const CartPage: FC = () => {
  useDocumentTitle(PAGE_TITLE)
  const { products } = useServerSideProps()
  const sspQueryModel = useServerSidePropsQueryLoader(getServerSideProps)
  useObservableState(sspQueryModel.state$)

  const { loading, response } = sspQueryModel.state

  return (
    <>
      <H1>{PAGE_TITLE}</H1>
      <Suspense fallback={<PageLoader />}>
        <Cart loading={loading} products={response?.products || products} />
      </Suspense>
    </>
  )
}

export default CartPage
