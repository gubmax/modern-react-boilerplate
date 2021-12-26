import { StyledProps } from 'client/src/common/typings'
import { Product } from '../../domain/entities'

export interface ProductListProps extends StyledProps {
  products: Product[]
}
