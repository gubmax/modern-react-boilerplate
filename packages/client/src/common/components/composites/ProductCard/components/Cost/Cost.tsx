import { FC } from 'react'

import { CostProps } from './Cost.types'
import * as s from './Cost.css'

const Cost: FC<CostProps> = ({ className, style, children }) => {
  return (
    <div className={className} style={style}>
      <span className={s.hint}>Last:</span>
      <span className={s.count}> {children} </span>
      <span className={s.hint}>ETH</span>
    </div>
  )
}

export default Cost
