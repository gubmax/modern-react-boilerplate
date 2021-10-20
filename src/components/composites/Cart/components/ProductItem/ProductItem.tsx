import { FC, useCallback } from 'react'

import { useInject } from 'src/common/hooks'
import { Button, RoundedButton } from 'src/components/inputs'
import { Wrapper } from 'src/components/surfaces'
import { H3 } from 'src/components/typography'
import { CartModel } from '../../models'
import { ProductItemProps } from './ProductItem.types'
import * as s from './ProductItem.css'

const ProductItem: FC<ProductItemProps> = ({ product: { id, icon, title, price, amount } }) => {
  const { increaseAmount, decreaseAmount, remove } = useInject(CartModel)

  const increase = useCallback(() => increaseAmount(id), [id, increaseAmount])
  const decrease = useCallback(() => decreaseAmount(id), [decreaseAmount, id])
  const removeItem = useCallback(() => remove(id), [id, remove])

  return (
    <Wrapper className={s.wrapper}>
      <i className={s.imageBox}>{icon}</i>
      <div className={s.body}>
        <div className={s.wrapper}>
          <H3>{title}</H3>
          <span className={s.price}>${price * amount}</span>
        </div>
        <div className={s.footer}>
          <Button className={s.deleteButton} onClick={removeItem}>
            Delete
          </Button>
          <RoundedButton className={s.marginLeft} primary onClick={decrease}>
            -
          </RoundedButton>
          <span className={s.counter}>{amount}</span>
          <RoundedButton primary onClick={increase}>
            +
          </RoundedButton>
        </div>
      </div>
    </Wrapper>
  )
}

export default ProductItem
