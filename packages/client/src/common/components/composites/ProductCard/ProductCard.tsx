import { FC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { Cost } from './components/Cost'
import { backgrounds } from './ProductCard.constants'
import { ProductCardProps } from './ProductCard.types'
import * as s from './ProductCard.css'

const ProductCard: FC<ProductCardProps> = ({ className, bg, style, icon, price, onClick }) => {
  return (
    <div className={cn(s.wrapper, className)} style={style} onClick={onClick}>
      <i className={cn(s.imageBox, backgrounds[bg])}>{icon}</i>
      <div className={s.info}>
        <Cost className={s.cost}>{price}</Cost>
        <span className={s.title}>The quick brown fox jumps over the lazy dog</span>
      </div>
    </div>
  )
}

export default ProductCard
