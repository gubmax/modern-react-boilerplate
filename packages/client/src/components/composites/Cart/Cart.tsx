import { FC } from 'react'

import { IconSizes } from 'client/src/common/hocs/withIcon'
import { useInject } from 'client/src/common/hooks/useInject'
import { useObservableState } from 'client/src/common/hooks/useObservableState'
import { H2, H3 } from 'client/src/components/typography/Heading'
import { EmptyShoppingCartIcon } from 'client/src/components/icons'
import { LoadingProp } from 'client/src/common/typings'
import { ProductList } from './components'
import { CartModel } from './models'
import { CartSkeleton } from './Cart.skeleton'
import * as s from './Cart.css'

const Cart: FC<LoadingProp> = ({ loading }) => {
  const { products$, totalPrice } = useInject(CartModel)
  const products = products$.value

  useObservableState(products$)

  if (loading) return <CartSkeleton />

  const listTemplate = products.length ? (
    <ProductList className={s.list} products={products} />
  ) : (
    <div className={s.emptyCartBox}>
      <EmptyShoppingCartIcon className={s.cartIcon} size={IconSizes.HUGE} />
      <H2>Your cart is empty</H2>
    </div>
  )

  return (
    <section className={s.wrapper}>
      {listTemplate}
      {!!products.length && <H3>Total price: ${totalPrice}</H3>}
    </section>
  )
}

export default Cart
