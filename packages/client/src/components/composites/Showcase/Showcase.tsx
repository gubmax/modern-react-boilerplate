import { FC } from 'react'

import { GroupSlider } from 'client/src/components/auxiliary/GroupSlider'
import { ProductCard } from '../ProductCard'
import { MainBanner } from './components/MainBanner'
import { recommendedProducts, trendingProducts } from './products.mock'
import { TITLE_RECOMMENDED, TITLE_TRENDING } from './Showcase.constants'
import * as s from './Showcase.css'

const Showcase: FC = () => {
  return (
    <>
      <MainBanner className={s.mainBanner} />
      <GroupSlider className={s.groupSlider} title={TITLE_RECOMMENDED}>
        {recommendedProducts.map((props, index) => (
          <ProductCard key={index} className={s.productCard} {...props} />
        ))}
      </GroupSlider>
      <GroupSlider className={s.groupSlider} title={TITLE_TRENDING}>
        {trendingProducts.map((props, index) => (
          <ProductCard key={index} className={s.productCard} {...props} />
        ))}
      </GroupSlider>
    </>
  )
}

export default Showcase
