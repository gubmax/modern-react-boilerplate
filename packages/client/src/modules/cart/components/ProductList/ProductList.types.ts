import { StyledProps } from 'client/src/common/typings'
import { Product } from '../../domain/entities/product.entity'

export interface ProductListProps extends StyledProps {
  products: Product[]
}
