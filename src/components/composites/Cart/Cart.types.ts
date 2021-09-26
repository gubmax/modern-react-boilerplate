import { LoadingProp } from 'src/types'
import { Product } from './domain/entities'

export interface CartProps extends LoadingProp {
  products?: Product[]
}
