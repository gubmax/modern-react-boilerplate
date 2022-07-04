import { FC } from 'react'

import { ChildrenProp } from 'client/src/common/typings'
import { Footer } from '../../../../Footer'
import { HeaderDesktop } from '../HeaderDesktop'
import { NavigationMenuDesktop } from '../NavigationMenuDesktop'
import * as s from './MainDesktop.css'

const MainDesktop: FC<ChildrenProp> = ({ children }) => {
  return (
    <>
      <HeaderDesktop className={s.header} />
      <div className={s.wrapper}>
        <div className={s.page} id="main">
          <aside className={s.aside}>
            <NavigationMenuDesktop />
          </aside>
          <main className={s.main}>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default MainDesktop
