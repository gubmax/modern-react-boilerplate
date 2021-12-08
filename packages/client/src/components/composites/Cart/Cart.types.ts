import { LoadingProp } from 'client/src/typings'
import { Product } from './domain/entities'

export interface CartProps extends LoadingProp {
  products?: Product[]
}
