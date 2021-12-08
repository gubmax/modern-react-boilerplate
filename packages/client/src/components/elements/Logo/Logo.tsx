import { FC } from 'react'

import { H2 } from 'client/src/components/typography'
import * as s from './Logo.css'

const Logo: FC = () => {
  return (
    <H2 className={s.text}>
      Boilerplate <span className={s.highlight}>UI</span>
    </H2>
  )
}

export default Logo
