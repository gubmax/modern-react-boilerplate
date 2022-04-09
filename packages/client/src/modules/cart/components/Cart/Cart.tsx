import { VFC } from 'react'

import { useBehaviorSubjectSubscription } from 'client/src/common/hooks/useBehaviorSubjectSubscription'
import { useInject } from 'client/src/common/hooks/useInject'
import { typography } from 'client/src/common/styles/shared/typography.css'
import { CartModel } from '../../models/cart.model'
import { EmptyMessage } from '../EmptyMessage'
import { ProductList } from '../ProductList'
import { CartSkeleton } from './Cart.skeleton'
import { CartProps } from './Cart.types'
import * as s from './Cart.css'

const Cart: VFC<CartProps> = ({ loading }) => {
  const { products$, totalPrice } = useInject(CartModel)
  const products = useBehaviorSubjectSubscription(products$)

  if (loading) return <CartSkeleton />

  const listTemplate = products.length ? (
    <ProductList className={s.list} products={products} />
  ) : (
    <EmptyMessage />
  )

  return (
    <section className={s.wrapper}>
      {listTemplate}
      {!!products.length && <h3 className={typography.h3}>Total price: ${totalPrice}</h3>}
    </section>
  )
}

export default Cart
