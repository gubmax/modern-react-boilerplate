import { FC } from 'react'

import { H2 } from 'client/src/components/typography/Heading'
import { MainBanner } from './components/MainBanner'
import { ProductCardList } from './components/ProductCardList'
import { recommendedProducts, trendingProducts } from './products.mock'
import * as s from './Showcase.css'

const Showcase: FC = () => {
  return (
    <>
      <MainBanner className={s.mainBanner} />
      <H2>Recommended</H2>
      <ProductCardList className={s.productCardList} items={recommendedProducts} />
      <H2>Trending</H2>
      <ProductCardList className={s.productCardList} items={trendingProducts} />
    </>
  )
}

export default Showcase
