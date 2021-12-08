import { FC } from 'react'

import { useInject } from 'client/src/common/hooks'
import { List } from 'client/src/components/surfaces'
import { StyledProps } from 'client/src/typings'
import { CartModel } from '../models'
import { ProductItem } from './ProductItem'

const ProductList: FC<StyledProps> = ({ ...rest }) => {
  const { products } = useInject(CartModel)

  return (
    <List {...rest}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </List>
  )
}

export default ProductList
