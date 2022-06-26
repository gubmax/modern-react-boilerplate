import { FC } from 'react'

import { AddIcon, RemoveIcon } from 'client/src/common/components/icons'
import { ButtonVariants } from 'client/src/common/components/inputs/buttons/BaseButton'
import { Button } from 'client/src/common/components/inputs/buttons/Button'
import { RoundedButton } from 'client/src/common/components/inputs/buttons/RoundedButton'
import { IconVariants } from 'client/src/common/hocs/withIcon'
import { useEvent } from 'client/src/common/hooks/useEvent'
import { useInject } from 'client/src/common/hooks/useInject'
import { CartModel } from '../../models/cart.model'
import { ProductItemProps } from './ProductItem.types'
import * as s from './ProductItem.css'

const ProductItem: FC<ProductItemProps> = ({ product: { id, icon, title, price, amount } }) => {
  const { increaseAmount, decreaseAmount, remove } = useInject(CartModel)

  const increase = useEvent(() => increaseAmount(id))
  const decrease = useEvent(() => decreaseAmount(id))
  const removeItem = useEvent(() => remove(id))

  return (
    <div className={s.wrapper}>
      <i className={s.imageBox}>{icon}</i>
      <div className={s.body}>
        <div className={s.header}>
          <h3 className={s.title}>{title}</h3>
          <span className={s.price}>${price * amount}</span>
        </div>
        <div className={s.footer}>
          <Button className={s.deleteButton} variant={ButtonVariants.OUTLINE} onClick={removeItem}>
            Delete
          </Button>
          <RoundedButton variant={ButtonVariants.PRIMARY} onClick={decrease}>
            <RemoveIcon variant={IconVariants.WHITE} />
          </RoundedButton>
          <span className={s.counter}>{amount}</span>
          <RoundedButton variant={ButtonVariants.PRIMARY} onClick={increase}>
            <AddIcon variant={IconVariants.WHITE} />
          </RoundedButton>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
