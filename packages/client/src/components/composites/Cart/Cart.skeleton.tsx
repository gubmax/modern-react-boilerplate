import { FC } from 'react'

import { List } from 'client/src/components/surfaces'
import { ProductItemSkeleton } from './components'
import * as s from './Cart.css'

export const CartSkeleton: FC = () => {
  return (
    <List as="section" className={s.wrapper}>
      <ProductItemSkeleton />
      <ProductItemSkeleton />
      <ProductItemSkeleton />
    </List>
  )
}
