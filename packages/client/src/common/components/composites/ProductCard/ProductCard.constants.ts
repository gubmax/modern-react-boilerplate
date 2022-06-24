import {
  AccessibilityIcon,
  ExploreIcon,
  GroupWorkIcon,
  LanguageIcon,
  OfflineBoltIcon,
  PetsIcon,
  RocketIcon,
  StarsIcon,
} from '../../icons'
import * as s from './ProductCard.css'

export enum ProductBackgrounds {
  bg0 = 'bg0',
  bg1 = 'bg1',
  bg2 = 'bg2',
  bg3 = 'bg3',
  bg4 = 'bg4',
  bg5 = 'bg5',
  bg6 = 'bg6',
  bg7 = 'bg7',
}

export const backgrounds = {
  [ProductBackgrounds.bg0]: s.productCardBg0,
  [ProductBackgrounds.bg1]: s.productCardBg1,
  [ProductBackgrounds.bg2]: s.productCardBg2,
  [ProductBackgrounds.bg3]: s.productCardBg3,
  [ProductBackgrounds.bg4]: s.productCardBg4,
  [ProductBackgrounds.bg5]: s.productCardBg5,
  [ProductBackgrounds.bg6]: s.productCardBg6,
  [ProductBackgrounds.bg7]: s.productCardBg7,
}

export const fill = {
  [ProductBackgrounds.bg0]: s.productCardIcon0,
  [ProductBackgrounds.bg1]: s.productCardIcon1,
  [ProductBackgrounds.bg2]: s.productCardIcon2,
  [ProductBackgrounds.bg3]: s.productCardIcon3,
  [ProductBackgrounds.bg4]: s.productCardIcon4,
  [ProductBackgrounds.bg5]: s.productCardIcon5,
  [ProductBackgrounds.bg6]: s.productCardIcon6,
  [ProductBackgrounds.bg7]: s.productCardIcon7,
}

export const icons = {
  [ProductBackgrounds.bg0]: ExploreIcon,
  [ProductBackgrounds.bg1]: RocketIcon,
  [ProductBackgrounds.bg2]: StarsIcon,
  [ProductBackgrounds.bg3]: PetsIcon,
  [ProductBackgrounds.bg4]: OfflineBoltIcon,
  [ProductBackgrounds.bg5]: AccessibilityIcon,
  [ProductBackgrounds.bg6]: LanguageIcon,
  [ProductBackgrounds.bg7]: GroupWorkIcon,
}
