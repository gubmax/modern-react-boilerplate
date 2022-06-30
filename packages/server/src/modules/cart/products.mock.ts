import { ProductDto, ProductVariant } from 'shared/http/requests/getProducts.request'

export const MOCK_PRODUCTS: ProductDto[] = [
  {
    id: '1',
    variant: ProductVariant.bg1,
    title: 'The quick brown fox jumps over the lazy dog',
    price: 1.02,
    amount: 2,
  },
  {
    id: '2',
    variant: ProductVariant.bg6,
    title: 'The quick brown fox jumps over the lazy dog',
    price: 0.05,
    amount: 1,
  },
  {
    id: '3',
    variant: ProductVariant.bg4,
    title: 'The quick brown fox jumps over the lazy dog',
    price: 0.8,
    amount: 4,
  },
]
