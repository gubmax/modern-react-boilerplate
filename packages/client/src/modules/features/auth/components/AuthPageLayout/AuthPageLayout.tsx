import { FC } from 'react'

import { Logo } from 'client/src/common/components/elements/Logo'
import { ChildrenProp } from 'client/src/common/typings'
import * as s from './AuthPageLayout.css'

const AuthPageLayout: FC<ChildrenProp> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Logo className={s.logo} />
      <div className={s.form}>{children}</div>
    </div>
  )
}

export default AuthPageLayout
