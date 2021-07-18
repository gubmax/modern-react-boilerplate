import { FC, useContext } from 'react'

import { H2, H3 } from 'src/components/typography/Heading'
import ProductList from './components/ProductList'
import { useObservableState } from 'src/hooks'
import { CartContext, provideCartContext } from './Cart.provider'
import * as s from './Cart.css'

const Cart: FC = () => {
  const {
    cartService: { goods$, goods, totalPrice },
  } = useContext(CartContext)

  useObservableState(goods$)

  const listTemplate = goods.length ? (
    <ProductList className={s.list} />
  ) : (
    <div className={s.emptyCartBox}>
      <i className={s.cartIcon}>🛒</i>
      <H2>Your cart is empty</H2>
    </div>
  )

  return (
    <section className={s.wrapper}>
      {listTemplate}
      {!!goods.length && <H3>Total price: ${totalPrice}</H3>}
    </section>
  )
}

export default provideCartContext(Cart)
