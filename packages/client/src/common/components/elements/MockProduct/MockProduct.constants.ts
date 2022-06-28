import { ProductVariant } from 'shared/http/requests/getProducts.request'
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
import { MockProduct } from './MockProduct.types'
import * as s from './MockProduct.css'

export const productVariants: Record<ProductVariant, MockProduct> = {
  [ProductVariant.bg0]: {
    bg: s.productCardBg0,
    fill: s.productCardIcon0,
    icon: ExploreIcon,
  },
  [ProductVariant.bg1]: {
    bg: s.productCardBg1,
    fill: s.productCardIcon1,
    icon: RocketIcon,
  },
  [ProductVariant.bg2]: {
    bg: s.productCardBg2,
    fill: s.productCardIcon2,
    icon: StarsIcon,
  },
  [ProductVariant.bg3]: {
    bg: s.productCardBg3,
    fill: s.productCardIcon3,
    icon: PetsIcon,
  },
  [ProductVariant.bg4]: {
    bg: s.productCardBg4,
    fill: s.productCardIcon4,
    icon: OfflineBoltIcon,
  },
  [ProductVariant.bg5]: {
    bg: s.productCardBg5,
    fill: s.productCardIcon5,
    icon: AccessibilityIcon,
  },
  [ProductVariant.bg6]: {
    bg: s.productCardBg6,
    fill: s.productCardIcon6,
    icon: LanguageIcon,
  },
  [ProductVariant.bg7]: {
    bg: s.productCardBg7,
    fill: s.productCardIcon7,
    icon: GroupWorkIcon,
  },
}
