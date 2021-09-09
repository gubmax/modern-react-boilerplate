import { FC } from 'react'

import { Skeleton } from 'src/components/elements'
import { Wrapper } from 'src/components/surfaces'
import * as s from './ProductItem.css'

const ProductItemSkeleton: FC = () => {
  return (
    <Wrapper className={s.wrapper}>
      <Skeleton className={s.imageBox} withoutMargin />
      <div className={s.body}>
        <Skeleton width="85%" />
        <Skeleton width="65%" />
      </div>
    </Wrapper>
  )
}

export default ProductItemSkeleton
