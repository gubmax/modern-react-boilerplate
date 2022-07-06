import { FC, memo } from 'react'

import { FavoriteIcon, UserIcon } from 'client/src/common/components/icons'
import { cn } from 'client/src/common/helpers/classNames'
import { IconVariants } from 'client/src/common/hocs/withIcon'
import { MockProduct } from '../../elements/MockProduct'
import { Price } from '../../elements/Price'
import { ButtonVariants } from '../../inputs/buttons/BaseButton'
import { RoundedButton } from '../../inputs/buttons/RoundedButton'
import { ProductCardProps } from './ProductCard.types'
import * as s from './ProductCard.css'

const ProductCard: FC<ProductCardProps> = ({ className, variant, style, price, onClick }) => {
  return (
    <div className={cn(s.wrapper, className)} style={style} onClick={onClick}>
      <MockProduct className={s.imageBox} variant={variant} />
      <div className={s.itemInfo}>
        <span className={s.title}>The quick brown fox jumps over the lazy dog</span>
        <div className={s.footer}>
          <span className={s.timer}>12:34:56</span>
          <div className={s.cost}>
            <span className={s.hint}>Last: </span>
            <Price value={price} />
          </div>
        </div>
      </div>
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
      </div>
    </div>
  )
}

export default memo(ProductCard)
