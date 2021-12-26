import { StyledProps } from 'client/src/common/typings'
import { IconSizes } from './withIcon.constants'

export interface IconProps extends StyledProps {
  active?: boolean
  size?: IconSizes
}
