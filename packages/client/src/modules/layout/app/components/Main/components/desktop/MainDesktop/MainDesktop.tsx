import { FC } from 'react'

import { SELECTOR_CONTENT } from 'client/src/common/components/addons/Modal'
import { cn } from 'client/src/common/helpers/classNames'
import { ChildrenProp } from 'client/src/common/typings'
import { Footer } from '../../Footer'
import { HeaderDesktop } from '../HeaderDesktop'
import { NavigationMenuDesktop } from '../NavigationMenuDesktop'
import * as s from './MainDesktop.css'

const MainDesktop: FC<ChildrenProp> = ({ children }) => {
  return (
    <>
      <HeaderDesktop className={s.header} />
      <div className={s.wrapper}>
        <div className={cn(SELECTOR_CONTENT, s.page)}>
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
