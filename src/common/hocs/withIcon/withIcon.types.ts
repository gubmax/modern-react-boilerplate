import { StyledProps } from 'src/types'
import { IconSizes } from './withIcon.constants'

export interface IconProps extends StyledProps {
  active?: boolean
  size?: IconSizes
}
