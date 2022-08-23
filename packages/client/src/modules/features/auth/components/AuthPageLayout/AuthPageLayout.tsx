import { FC } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'
import { Logo } from 'client/src/common/components/elements/Logo'
import { ChildrenProp } from 'client/src/common/typings'
import * as s from './AuthPageLayout.css'

const AuthPageLayout: FC<ChildrenProp> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <a className={s.logo} href={PageRoutes.ROOT}>
        <Logo />
      </a>
      <div className={s.form}>{children}</div>
    </div>
  )
}

export default AuthPageLayout
