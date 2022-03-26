import { ProductBackgrounds } from '../ProductCard'
import { ProductCardProps } from '../ProductCard/ProductCard.types'

export const recommendedProducts: Array<ProductCardProps> = [
  { bg: ProductBackgrounds.bg1, icon: '🧬', price: 2.5 },
  { bg: ProductBackgrounds.bg3, icon: '🦄', price: 1.05 },
  { bg: ProductBackgrounds.bg1, icon: '💎', price: 0.09 },
  { bg: ProductBackgrounds.bg1, icon: '🧿', price: 1.02 },
  { bg: ProductBackgrounds.bg0, icon: '👑', price: 0.65 },
  { bg: ProductBackgrounds.bg2, icon: '💈', price: 3.1 },
  { bg: ProductBackgrounds.bg2, icon: '🍄', price: 0.22 },
  { bg: ProductBackgrounds.bg3, icon: '🍭', price: 0.85 },
]

export const trendingProducts: Array<ProductCardProps> = [
  { bg: ProductBackgrounds.bg0, icon: '🍺', price: 0.001 },
  { bg: ProductBackgrounds.bg1, icon: '🧊', price: 0.025 },
  { bg: ProductBackgrounds.bg2, icon: '🧯', price: 0.3 },
  { bg: ProductBackgrounds.bg3, icon: '🎨', price: 0.03 },
  { bg: ProductBackgrounds.bg2, icon: '🍷', price: 0.2 },
  { bg: ProductBackgrounds.bg3, icon: '🪆', price: 1.2 },
  { bg: ProductBackgrounds.bg3, icon: '🎉', price: 2 },
  { bg: ProductBackgrounds.bg1, icon: '🧬', price: 2.5 },
]
