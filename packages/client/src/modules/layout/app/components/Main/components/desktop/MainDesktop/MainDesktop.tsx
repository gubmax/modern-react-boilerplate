import { FC } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'
import { Link } from 'client/src/common/components/addons/Link'
import { Logo } from 'client/src/common/components/elements/Logo'
import { ChildrenProp } from 'client/src/common/typings'
import { HeaderDesktop } from '../HeaderDesktop'
import { NavigationMenuDesktop } from '../NavigationMenuDesktop'
import * as s from './MainDesktop.css'

const MainDesktop: FC<ChildrenProp> = ({ children }) => {
  return (
    <div className={s.page}>
      <HeaderDesktop className={s.header} />
      <aside className={s.aside}>
        <Link to={PageRoutes.ROOT} className={s.logo}>
          <Logo />
        </Link>
        <NavigationMenuDesktop />
      </aside>
      <main className={s.main}>{children}</main>
    </div>
  )
}

export default MainDesktop
