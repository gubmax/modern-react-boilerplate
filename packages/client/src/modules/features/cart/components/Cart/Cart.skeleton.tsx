import { FC } from 'react'

import { List } from 'client/src/common/components/surfaces/List'
import { ProductItemSkeleton } from '../ProductItem'
import * as s from './Cart.css'

export const CartSkeleton: FC = () => {
  return (
    <List as="section" className={s.block}>
      <ProductItemSkeleton />
      <ProductItemSkeleton />
      <ProductItemSkeleton />
    </List>
  )
}
