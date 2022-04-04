import { FC } from 'react'

import { Skeleton } from 'client/src/common/components/addons/Skeleton'
import * as s from './ProductItem.css'

const ProductItemSkeleton: FC = () => {
  return (
    <div className={s.wrapper}>
      <Skeleton width="8rem" height="8rem" className={s.imageBox} withoutMargin />
      <div className={s.body}>
        <Skeleton width="85%" />
        <Skeleton width="65%" />
      </div>
    </div>
  )
}

export default ProductItemSkeleton
