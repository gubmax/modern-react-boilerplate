import { lazy, FC, Suspense } from 'react'

import { useDocumentTitle } from 'client/src/common/hooks/useDocumentTitle'
import { useInject } from 'client/src/common/hooks/useInject'
import { useObservableState } from 'client/src/common/hooks/useObservableState'
import { useServerSidePropsQueryLoader } from 'client/src/common/hooks/useServerSidePropsQueryLoader'
import { PageLoader } from 'client/src/components/composites/PageLoader'
import { H1 } from 'client/src/components/typography/Heading'
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
