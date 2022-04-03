import * as s from './ProductCard.css'

export enum ProductBackgrounds {
  bg0 = 'bg0',
  bg1 = 'bg1',
  bg2 = 'bg2',
  bg3 = 'bg3',
}

export const backgrounds = {
  [ProductBackgrounds.bg0]: s.productCardBg0,
  [ProductBackgrounds.bg1]: s.productCardBg1,
  [ProductBackgrounds.bg2]: s.productCardBg2,
  [ProductBackgrounds.bg3]: s.productCardBg3,
}
