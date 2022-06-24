import { ProductBackgrounds } from '../../common/components/composites/ProductCard'
import { ProductCardProps } from '../../common/components/composites/ProductCard/ProductCard.types'

export const recommendedProducts: ProductCardProps[] = [
  { bg: ProductBackgrounds.bg0, price: 2.5 },
  { bg: ProductBackgrounds.bg3, price: 1.05 },
  { bg: ProductBackgrounds.bg6, price: 0.09 },
  { bg: ProductBackgrounds.bg5, price: 1.02 },
  { bg: ProductBackgrounds.bg1, price: 0.65 },
  { bg: ProductBackgrounds.bg4, price: 3.1 },
  { bg: ProductBackgrounds.bg2, price: 0.22 },
  { bg: ProductBackgrounds.bg7, price: 0.85 },
]

export const trendingProducts: ProductCardProps[] = [
  { bg: ProductBackgrounds.bg6, price: 0.001 },
  { bg: ProductBackgrounds.bg2, price: 0.025 },
  { bg: ProductBackgrounds.bg0, price: 0.3 },
  { bg: ProductBackgrounds.bg4, price: 0.03 },
  { bg: ProductBackgrounds.bg5, price: 0.2 },
  { bg: ProductBackgrounds.bg7, price: 1.2 },
  { bg: ProductBackgrounds.bg1, price: 2 },
  { bg: ProductBackgrounds.bg3, price: 2.5 },
]
