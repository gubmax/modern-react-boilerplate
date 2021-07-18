import { FC, useContext } from 'react'

import { List } from 'src/components/surfaces/List'
import { StyledProps } from 'src/types'
import { CartContext } from '../Cart.provider'
import { ProductItem } from './ProductItem'

const ProductList: FC<StyledProps> = ({ ...rest }) => {
  const { cartService } = useContext(CartContext)

  return (
    <List {...rest}>
      {cartService.goods.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </List>
  )
}

export default ProductList
