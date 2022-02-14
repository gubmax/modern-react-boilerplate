import { VFC } from 'react'

import { List } from 'client/src/components/surfaces/List'
import { ProductItem } from '../ProductItem'
import { ProductListProps } from './ProductList.types'

const ProductList: VFC<ProductListProps> = ({ className, style, products }) => {
  return (
    <List className={className} style={style}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </List>
  )
}

export default ProductList
