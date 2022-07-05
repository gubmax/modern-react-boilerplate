import { FC, lazy, Suspense } from 'react'

import { PageLoader } from 'client/src/common/components/composites/PageLoader'
import { PageTitle } from 'client/src/common/components/elements/PageTitle'
import { useBehaviorSubjectSubscription } from 'client/src/common/hooks/useBehaviorSubjectSubscription'
import { useDocumentTitle } from 'client/src/common/hooks/useDocumentTitle'
import { useInject } from 'client/src/common/hooks/useInject'
import { useServerSidePropsQueryLoader } from 'client/src/common/hooks/useServerSidePropsQueryLoader'
import { CartSspQueryModel } from '../models/cartSspQuery.model'
import { PAGE_TITLE } from './Cart.constants'

const Cart = lazy(() => import('client/src/modules/features/cart/cart.chunk'))

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
