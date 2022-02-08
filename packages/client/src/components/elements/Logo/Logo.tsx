import { FC } from 'react'

import * as s from './Logo.css'

const Logo: FC = () => {
  return (
    <span className={s.text}>
      <span className={s.title}>Boilerplate </span>
      <span className={s.highlight}>UI</span>
    </span>
  )
}

export default Logo
