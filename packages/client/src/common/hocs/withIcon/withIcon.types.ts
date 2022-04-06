import { StyledProps } from 'client/src/common/typings'
import { IconSizes, IconVariants } from './withIcon.constants'

export interface IconProps extends StyledProps {
  variant?: IconVariants
  size?: IconSizes
}
