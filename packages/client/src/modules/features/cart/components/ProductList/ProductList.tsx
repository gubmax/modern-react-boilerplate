import { FC, memo } from 'react'

import { List } from 'client/src/common/components/surfaces/List'
import { ProductItem } from '../ProductItem'
import { ProductListProps } from './ProductList.types'

const ProductList: FC<ProductListProps> = ({ className, style, products }) => {
  return (
    <List className={className} style={style}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </List>
  )
}

export default memo(ProductList)
