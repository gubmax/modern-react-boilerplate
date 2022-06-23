import { FC } from 'react'

import { ChildrenProp } from 'client/src/common/typings'
import { HeaderDesktop } from '../HeaderDesktop'
import { NavigationMenuDesktop } from '../NavigationMenuDesktop'
import * as s from './MainDesktop.css'

const MainDesktop: FC<ChildrenProp> = ({ children }) => {
  return (
    <>
      <HeaderDesktop className={s.header} />
      <div className={s.page}>
        <aside className={s.aside}>
          <NavigationMenuDesktop />
        </aside>
        <main id="main" className={s.main}>
          {children}
        </main>
      </div>
    </>
  )
}

export default MainDesktop
