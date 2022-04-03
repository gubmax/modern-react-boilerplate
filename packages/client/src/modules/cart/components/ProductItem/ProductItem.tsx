import { VFC } from 'react'

import { useInject } from 'client/src/common/hooks/useInject'
import { Button } from 'client/src/common/components/inputs/buttons/Button'
import { RoundedButton } from 'client/src/common/components/inputs/buttons/RoundedButton'
import { Wrapper } from 'client/src/common/components/surfaces/Wrapper'
import { H3 } from 'client/src/common/components/typography/Heading'
import { CartModel } from '../../models/cart.model'
import { ProductItemProps } from './ProductItem.types'
import * as s from './ProductItem.css'

const ProductItem: VFC<ProductItemProps> = ({ product: { id, icon, title, price, amount } }) => {
  const { increaseAmount, decreaseAmount, remove } = useInject(CartModel)

  const increase = () => increaseAmount(id)
  const decrease = () => decreaseAmount(id)
  const removeItem = () => remove(id)

  return (
    <Wrapper className={s.wrapper}>
      <i className={s.imageBox}>{icon}</i>
      <div className={s.body}>
        <div className={s.header}>
          <H3 className={s.title}>{title}</H3>
          <span className={s.price}>${price * amount}</span>
        </div>
        <div className={s.footer}>
          <Button className={s.deleteButton} onClick={removeItem}>
            Delete
          </Button>
          <RoundedButton primary onClick={decrease}>
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
