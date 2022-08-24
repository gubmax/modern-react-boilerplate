import { FC, memo } from 'react'

import { MockProduct } from 'client/src/common/components/elements/MockProduct'
import { Price } from 'client/src/common/components/elements/Price'
import { AddIcon, RemoveIcon } from 'client/src/common/components/icons'
import { ButtonVariants } from 'client/src/common/components/inputs/buttons/BaseButton'
import { RoundedButton } from 'client/src/common/components/inputs/buttons/RoundedButton'
import { IconVariants } from 'client/src/common/hocs/withIcon'
import { useEvent } from 'client/src/common/hooks/useEvent'
import { useInject } from 'client/src/common/hooks/useInject'
import { CartService } from '../../domain/services/cart.service'
import { CartModel } from '../../models/cart.model'
import { DeleteButton } from './components/DeleteButton'
import { ProductItemProps } from './ProductItem.types'
import * as s from './ProductItem.css'

const ProductItem: FC<ProductItemProps> = ({ product: { id, variant, title, price, amount } }) => {
  const { increaseAmount, decreaseAmount, remove } = useInject(CartModel)
  const { roundAmount } = useInject(CartService)

  const increase = useEvent(() => increaseAmount(id))
  const decrease = useEvent(() => decreaseAmount(id))
  const deleteItem = useEvent(() => remove(id))

  return (
    <div className={s.wrapper}>
      <MockProduct className={s.productBox} variant={variant} />
      <div className={s.body}>
        <div className={s.header}>
          <h3 className={s.title}>{title}</h3>
          <div className={s.price}>
            <Price value={roundAmount(price * amount)} />
          </div>
        </div>
        <div className={s.footer}>
          <DeleteButton className={s.deleteButton} onClick={deleteItem} />
          <RoundedButton variant={ButtonVariants.PRIMARY} onClick={decrease}>
            <RemoveIcon variant={IconVariants.WHITE} />
          </RoundedButton>
          <span className={s.amount}>{amount}</span>
          <RoundedButton variant={ButtonVariants.PRIMARY} onClick={increase}>
            <AddIcon variant={IconVariants.WHITE} />
          </RoundedButton>
        </div>
      </div>
    </div>
  )
}

export default memo(ProductItem)
