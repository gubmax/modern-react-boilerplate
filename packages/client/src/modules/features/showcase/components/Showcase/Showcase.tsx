import { FC, memo } from 'react'

import { GroupSlider } from 'client/src/common/components/addons/GroupSlider'
import { ProductCard } from 'client/src/common/components/composites/ProductCard'
import { recommendedProducts, trendingProducts } from '../../products.mock'
import { AuthBanner } from '../AuthBanner'
import { TITLE_RECOMMENDED, TITLE_TRENDING } from './Showcase.constants'
import * as s from './Showcase.css'

const Showcase: FC = () => {
  return (
    <>
      <AuthBanner className={s.mainBanner} />
      <GroupSlider className={s.groupSlider} title={TITLE_RECOMMENDED}>
        {recommendedProducts.map((props, index) => (
          <ProductCard key={index} {...props} />
        ))}
      </GroupSlider>
      <GroupSlider className={s.groupSlider} title={TITLE_TRENDING}>
        {trendingProducts.map((props, index) => (
          <ProductCard key={index} {...props} />
        ))}
      </GroupSlider>
    </>
  )
}

export default memo(Showcase)
