import { FC } from 'react'

import { H2 } from 'src/components/typography'
import * as s from './Logo.css'

const Logo: FC = () => {
  return (
    <H2 className={s.text}>
      <span className={s.highlight}>B</span>oilerplate
    </H2>
  )
}

export default Logo
