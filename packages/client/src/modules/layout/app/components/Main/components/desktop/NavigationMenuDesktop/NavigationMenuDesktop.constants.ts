import { PageRoutes } from 'client/src/browser/http/constants'
import {
  CollectionIcon,
  HelpIcon,
  InfoIcon,
  SalesIcon,
  ScheduleIcon,
  SettingsIcon,
  ShowcaseIcon,
} from 'client/src/common/components/icons'
import { NavigationItemDesktopProps } from '../NavigationItemDekstop'

export const MAIN_ROUTES: NavigationItemDesktopProps[] = [
  { to: PageRoutes.ROOT, icon: ShowcaseIcon, text: 'Showcase' },
  { to: PageRoutes.COLLECTION, icon: CollectionIcon, text: 'My Collection' },
  { to: PageRoutes.SALES, icon: SalesIcon, text: 'Sales' },
  { to: PageRoutes.SCHEDULE, icon: ScheduleIcon, text: 'Schedule' },
]

export const SECONDARY_ROUTES: NavigationItemDesktopProps[] = [
  { to: PageRoutes.SETTINGS, icon: SettingsIcon, text: 'Settings' },
  { to: PageRoutes.HELP, icon: HelpIcon, text: 'Help' },
  { to: PageRoutes.ABOUT, icon: InfoIcon, text: 'About' },
]
