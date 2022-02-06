import { StyledProps } from 'client/src/common/typings'

export interface ProductCardProps extends StyledProps {
  imageClassName: string
  icon: string
  price: number
  onClick?: () => void
}
