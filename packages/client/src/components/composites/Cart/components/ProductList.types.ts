import { StyledProps } from 'client/src/typings'
import { Product } from '../domain/entities'

export interface ProductListProps extends StyledProps {
  products: Product[]
}
