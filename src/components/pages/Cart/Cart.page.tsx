import { lazy, FC, Suspense } from 'react'

import {
  useDocumentTitle,
  useObservableState,
  useServerSideProps,
  useServerSidePropsQueryLoader,
} from 'src/common/hooks'
import { PageLoader } from 'src/components/composites'
import { H1 } from 'src/components/typography'
import { getServerSideProps } from './Cart.server'
import { PAGE_TITLE } from './Cart.constants'

const Cart = lazy(() => import('src/components/composites/Cart/cart.chunk'))

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
