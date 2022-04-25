import { FC } from 'react'

import { FavoriteIcon, UserIcon } from 'client/src/common/components/icons'
import { cn } from 'client/src/common/helpers/classNames'
import { IconVariants } from 'client/src/common/hocs/withIcon'
import { ButtonVariants } from '../../inputs/buttons/BaseButton'
import { RoundedButton } from '../../inputs/buttons/RoundedButton'
import { Cost } from './components/Cost'
import { backgrounds } from './ProductCard.constants'
import { ProductCardProps } from './ProductCard.types'
import * as s from './ProductCard.css'

const ProductCard: FC<ProductCardProps> = ({ className, bg, style, icon, price, onClick }) => {
  return (
    <div className={cn(s.wrapper, className)} style={style} onClick={onClick}>
      <div className={s.header}>
        <RoundedButton className={s.collectionAvatar} variant={ButtonVariants.OUTLINE}>
          <UserIcon variant={IconVariants.ACCENT} />
        </RoundedButton>
        <div>
          <span className={s.collectionName}>Collection Name</span>
          <span className={s.username}>@username</span>
        </div>
        <RoundedButton className={s.favoriteIcon}>
          <FavoriteIcon />
        </RoundedButton>
        <span className={s.likesCounter}>123</span>
      </div>
      <i className={cn(s.imageBox, backgrounds[bg])}>{icon}</i>
      <div className={s.itemInfo}>
        <span className={s.title}>The quick brown fox jumps over the lazy dog</span>
        <div className={s.footer}>
          <span className={s.timer}>12:34:56</span>
          <Cost className={s.cost}>{price}</Cost>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
