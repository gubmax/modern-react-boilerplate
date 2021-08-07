import { FC } from 'react'

import { List } from 'src/components/surfaces'
import { StyledProps } from 'src/types'
import { useCartDeps } from '../Cart.provider'
import { ProductItem } from './ProductItem'

const ProductList: FC<StyledProps> = ({ ...rest }) => {
  const { cartModel } = useCartDeps()

  return (
    <List {...rest}>
      {cartModel.products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </List>
  )
}

export default ProductList
