import { FC, lazy, Suspense } from 'react'

import { useDocumentTitle } from 'client/src/common/hooks/useDocumentTitle'
import { useInject } from 'client/src/common/hooks/useInject'
import { useBehaviorSubjectSubscription } from 'client/src/common/hooks/useBehaviorSubjectSubscription'
import { useServerSidePropsQueryLoader } from 'client/src/common/hooks/useServerSidePropsQueryLoader'
import { PageTitle } from 'client/src/common/components/elements/PageTitle'
import { PageLoader } from 'client/src/common/components/composites/PageLoader'
import { CartSspQueryModel } from '../models/cartSspQuery.model'
import { PAGE_TITLE } from './Cart.constants'

const Cart = lazy(() => import('client/src/modules/cart/cart.chunk'))

const CartPage: FC = () => {
  useDocumentTitle(PAGE_TITLE)

  const sspQueryModel = useInject(CartSspQueryModel)

  useServerSidePropsQueryLoader(sspQueryModel)
  const { loading } = useBehaviorSubjectSubscription(sspQueryModel.query$)

  return (
    <>
      <PageTitle>{PAGE_TITLE}</PageTitle>
      <Suspense fallback={<PageLoader />}>
        <Cart loading={loading} />
      </Suspense>
    </>
  )
}

export default CartPage
