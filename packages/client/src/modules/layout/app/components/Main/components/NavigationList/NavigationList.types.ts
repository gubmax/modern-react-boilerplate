import { StyledProps } from 'client/src/common/typings'
import { NavigationItemDesktopProps } from '../desktop/NavigationItemDesktop'

export interface NavigationListProps extends StyledProps {
  title: string
  routes: NavigationItemDesktopProps[]
}
