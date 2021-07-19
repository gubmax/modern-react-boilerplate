import { FC } from 'react'

import { H2, A } from 'src/components/typography'
import { LINK_REPO } from './Header.constants'
import * as s from './Header.css'

const Header: FC = () => {
  return (
    <div className={s.wrapper}>
      <H2 className={s.logoWrapper}>🌀 Modern React Boilerplate</H2>
      <A href={LINK_REPO} className={s.repoLink} target="_blank" rel="noreferrer noopener">
        GitHub
      </A>
    </div>
  )
}

export default Header
