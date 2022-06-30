import { FC } from 'react'

import { Skeleton } from 'client/src/common/components/addons/Skeleton'
import { pxToRem } from 'client/src/common/helpers/pxToRem'
import * as s from './ProductItem.css'

const size = pxToRem(112)

const ProductItemSkeleton: FC = () => {
  return (
    <div className={s.wrapper}>
      <Skeleton width={size} height={size} className={s.productBox} withoutMargin />
      <div className={s.body}>
        <Skeleton width="85%" />
        <Skeleton width="65%" />
      </div>
    </div>
  )
}

export default ProductItemSkeleton
