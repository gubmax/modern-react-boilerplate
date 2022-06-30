import { FC } from 'react'

import { PriceProps } from './Price.types'
import * as s from './Price.css'

const Price: FC<PriceProps> = ({ value }) => {
  return (
    <>
      <span className={s.count}>{value} </span>
      <span className={s.hint}>ETH</span>
    </>
  )
}

export default Price
