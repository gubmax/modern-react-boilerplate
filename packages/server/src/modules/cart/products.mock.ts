import { ProductDto, ProductVariant } from 'shared/http/requests/getProducts.request'

export const MOCK_PRODUCTS: ProductDto[] = [
  {
    id: '1',
    variant: ProductVariant.bg1,
    title: 'Computer Monitor with 23.8-Inch IPS Display (1080p)',
    price: 170,
    amount: 2,
  },
  {
    id: '2',
    variant: ProductVariant.bg6,
    title: 'Portable External Hard Drive HDD, USB 3.0, Compatible with PC, Mac, PS4 & Xbox',
    price: 78,
    amount: 1,
  },
  {
    id: '3',
    variant: ProductVariant.bg4,
    title: 'Comfortable, USB Mouse and Keyboard Combo',
    price: 144,
    amount: 4,
  },
]
