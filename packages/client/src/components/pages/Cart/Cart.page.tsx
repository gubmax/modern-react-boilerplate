import { lazy, FC, Suspense } from 'react'

import {
  useDocumentTitle,
  useInject,
  useObservableState,
  useServerSidePropsQueryLoader,
} from 'client/src/common/hooks'
import { PageLoader } from 'client/src/components/composites'
import { H1 } from 'client/src/components/typography'
import { CartSspQueryModel } from './models/cartSspQuery.model'
import { PAGE_TITLE } from './Cart.constants'

const Cart = lazy(() => import('client/src/components/composites/Cart/cart.chunk'))

const CartPage: FC = () => {
  useDocumentTitle(PAGE_TITLE)

  const sspQueryModel = useInject(CartSspQueryModel)

  useServerSidePropsQueryLoader(sspQueryModel)
  useObservableState(sspQueryModel.state$)

  return (
    <>
      <H1>{PAGE_TITLE}</H1>
      <Suspense fallback={<PageLoader />}>
        <Cart loading={sspQueryModel.state.loading} />
      </Suspense>
    </>
  )
}

export default CartPage
