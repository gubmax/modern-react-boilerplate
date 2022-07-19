import { FC, memo } from 'react'

import { Price } from 'client/src/common/components/elements/Price'
import { Tip } from 'client/src/common/components/surfaces/Tip'
import { useBehaviorSubjectSubscription } from 'client/src/common/hooks/useBehaviorSubjectSubscription'
import { useInject } from 'client/src/common/hooks/useInject'
import { dt } from 'client/src/common/styles/designTokens'
import { CartModel } from '../../models/cart.model'
import { EmptyMessage } from '../EmptyMessage'
import { ProductList } from '../ProductList'
import { CartSkeleton } from './Cart.skeleton'
import { CartProps } from './Cart.types'
import * as s from './Cart.css'

const Cart: FC<CartProps> = ({ loading }) => {
  const { products$, totalPrice } = useInject(CartModel)
  const products = useBehaviorSubjectSubscription(products$)

  let contentTemplate = null

  if (loading) contentTemplate = <CartSkeleton />
  else if (products.length)
    contentTemplate = <ProductList className={s.block} products={products} />
  else contentTemplate = <EmptyMessage />

  return (
    <section className={s.wrapper}>
      <Tip className={s.block}>The quick brown fox jumps over the lazy dog</Tip>
      {contentTemplate}
      {(!!products.length || loading) && (
        <span className={dt.style.typography.h3}>
          <span>Total price: </span>
          {loading ? null : <Price value={totalPrice} />}
        </span>
      )}
    </section>
  )
}

export default memo(Cart)
