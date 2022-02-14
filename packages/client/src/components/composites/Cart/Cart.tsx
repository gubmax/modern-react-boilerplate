import { VFC } from 'react'

import { useInject } from 'client/src/common/hooks/useInject'
import { useObservableState } from 'client/src/common/hooks/useObservableState'
import { H3 } from 'client/src/components/typography/Heading'
import { LoadingProp } from 'client/src/common/typings'
import { ProductList } from './components/ProductList'
import { EmptyMessage } from './components/EmptyMessage'
import { CartModel } from './models'
import { CartSkeleton } from './Cart.skeleton'
import * as s from './Cart.css'

const Cart: VFC<LoadingProp> = ({ loading }) => {
  const { products$, totalPrice } = useInject(CartModel)
  const products = products$.value

  useObservableState(products$)

  if (loading) return <CartSkeleton />

  const listTemplate = products.length ? (
    <ProductList className={s.list} products={products} />
  ) : (
    <EmptyMessage />
  )

  return (
    <section className={s.wrapper}>
      {listTemplate}
      {!!products.length && <H3>Total price: ${totalPrice}</H3>}
    </section>
  )
}

export default Cart
