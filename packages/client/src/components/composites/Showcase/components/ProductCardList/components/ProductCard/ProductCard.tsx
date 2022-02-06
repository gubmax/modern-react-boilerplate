import { FC } from 'react'

import { Wrapper } from 'client/src/components/surfaces/Wrapper'
import { cn } from 'client/src/common/helpers/classNames'
import { Cost } from './components/Cost'
import { ProductCardProps } from './ProductCard.types'
import * as s from './ProductCard.css'

const ProductCard: FC<ProductCardProps> = ({
  className,
  imageClassName,
  style,
  icon,
  price,
  onClick,
}) => {
  return (
    <Wrapper className={cn(s.wrapper, className)} style={style} onClick={onClick}>
      <i className={cn(s.imageBox, imageClassName)}>{icon}</i>
      <Wrapper className={s.info}>
        <Cost className={s.cost}>{price}</Cost>
        Title
      </Wrapper>
    </Wrapper>
  )
}

export default ProductCard
