import { FC } from 'react'

import { useInject } from 'src/common/hooks'
import { List } from 'src/components/surfaces'
import { StyledProps } from 'src/types'
import { CartModel, cartModelSymbol } from '../models'
import { ProductItem } from './ProductItem'

const ProductList: FC<StyledProps> = ({ ...rest }) => {
  const { products } = useInject<CartModel>(cartModelSymbol)

  return (
    <List {...rest}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </List>
  )
}

export default ProductList
