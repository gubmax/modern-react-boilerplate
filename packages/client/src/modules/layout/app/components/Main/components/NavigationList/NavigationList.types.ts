import { StyledProps } from 'client/src/common/typings'
import { NavigationItemDesktopProps } from '../desktop/NavigationItemDekstop'

export interface NavigationListProps extends StyledProps {
  title: string
  routes: NavigationItemDesktopProps[]
}
