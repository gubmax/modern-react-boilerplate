import { FC } from 'react'

import { List } from 'src/components/surfaces'
import { StyledProps } from 'src/types'
import { useDeps } from '../Cart.provider'
import { ProductItem } from './ProductItem'

const ProductList: FC<StyledProps> = ({ ...rest }) => {
  const { cartService } = useDeps()

  return (
    <List {...rest}>
      {cartService.goods.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </List>
  )
}

export default ProductList
