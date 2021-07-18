import { FC, useCallback, useContext } from 'react'

import { RoundedButton } from 'src/components/inputs/RoundedButton'
import { H3 } from 'src/components/typography/Heading'
import { Button } from 'src/components/inputs/Button'
import { Wrapper } from 'src/components/surfaces/Wrapper'
import { CartContext } from '../../Cart.provider'
import { ProductItemProps } from './ProductItem.types'
import * as s from './ProductItem.css'

const ProductItem: FC<ProductItemProps> = ({ product: { id, icon, title, price, amount } }) => {
  const {
    cartService: { setAmount, remove },
  } = useContext(CartContext)

  const increase = useCallback(() => setAmount(id, amount + 1), [amount, id, setAmount])
  const decrease = useCallback(() => setAmount(id, amount - 1), [amount, id, setAmount])
  const removeItem = useCallback(() => remove(id), [id, remove])

  return (
    <Wrapper className={s.wrapper}>
      <i className={s.imageBox}>{icon}</i>
      <div className={s.body}>
        <div className={s.wrapper}>
          <H3>{title}</H3>
          <span className={s.price}>${price * amount}</span>
        </div>
        <div className={s.wrapper}>
          <Button onClick={removeItem}>Delete</Button>
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