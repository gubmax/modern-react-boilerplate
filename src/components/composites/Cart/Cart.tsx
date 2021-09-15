import { FC } from 'react'

import { IconSizes } from 'src/common/hocs'
import { useObservableState } from 'src/common/hooks'
import { LoadingProp } from 'src/types'
import { H2, H3 } from 'src/components/typography'
import { EmptyShoppingCartIcon } from 'src/components/icons'
import { ProductList } from './components'
import { CartSkeleton } from './Cart.skeleton'
import { provide, useCartDeps } from './Cart.provider'
import * as s from './Cart.css'

const Cart: FC<LoadingProp> = ({ loading }) => {
  const {
    cartModel: { products$, products, totalPrice },
  } = useCartDeps()

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

export default provide(Cart)
