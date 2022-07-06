import { ProductCardProps } from 'client/src/common/components/composites/ProductCard'
import { ProductVariant } from 'shared/http/requests/getProducts.request'

export const recommendedProducts: ProductCardProps[] = [
  { variant: ProductVariant.bg0, price: 2.5 },
  { variant: ProductVariant.bg3, price: 1.05 },
  { variant: ProductVariant.bg6, price: 0.09 },
  { variant: ProductVariant.bg5, price: 1.02 },
  { variant: ProductVariant.bg1, price: 0.65 },
  { variant: ProductVariant.bg4, price: 3.1 },
  { variant: ProductVariant.bg2, price: 0.22 },
  { variant: ProductVariant.bg7, price: 0.85 },
]

export const trendingProducts: ProductCardProps[] = [
  { variant: ProductVariant.bg6, price: 0.001 },
  { variant: ProductVariant.bg2, price: 0.025 },
  { variant: ProductVariant.bg4, price: 0.3 },
  { variant: ProductVariant.bg0, price: 0.03 },
  { variant: ProductVariant.bg5, price: 0.2 },
  { variant: ProductVariant.bg7, price: 1.2 },
  { variant: ProductVariant.bg1, price: 2 },
  { variant: ProductVariant.bg3, price: 2.5 },
]
