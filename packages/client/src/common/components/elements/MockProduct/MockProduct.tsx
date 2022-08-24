import { FC, memo } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { productVariants } from './MockProduct.constants'
import { MockProductProps } from './MockProduct.types'

const MockProduct: FC<MockProductProps> = ({ className, style, variant }) => {
  const { bg, fill, icon: Icon } = productVariants[variant]

  return (
    <div className={cn(bg, className)} style={style}>
      <Icon className={fill} />
    </div>
  )
}

export default memo(MockProduct)
