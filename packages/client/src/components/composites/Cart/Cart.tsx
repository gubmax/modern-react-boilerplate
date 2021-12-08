import { FC } from 'react'

import { IconSizes } from 'client/src/common/hocs'
import { useInit, useInject, useObservableState } from 'client/src/common/hooks'
import { H2, H3 } from 'client/src/components/typography'
import { EmptyShoppingCartIcon } from 'client/src/components/icons'
import { ProductList } from './components'
import { CartModel } from './models'
import { CartSkeleton } from './Cart.skeleton'
import { CartProps } from './Cart.types'
import * as s from './Cart.css'
import './Cart.ioc'

const Cart: FC<CartProps> = ({ loading, products: initialProducts }) => {
  const { products$, products, totalPrice } = useInject(CartModel)

  useInit(() => initialProducts && products$.next(initialProducts))

  useObservableState(products$)

  if (loading) return <CartSkeleton />

  const listTemplate = products.length ? (
    <ProductList className={s.list} />
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
