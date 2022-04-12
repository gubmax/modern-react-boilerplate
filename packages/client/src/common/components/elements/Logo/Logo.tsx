import { FC } from 'react'

import * as s from './Logo.css'

const Logo: FC = () => {
  return (
    <div className={s.text}>
      <span className={s.title}>Boilerplate </span>
      <span className={s.highlight}>UI</span>
    </div>
  )
}

export default Logo
