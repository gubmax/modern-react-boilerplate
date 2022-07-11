import { FC } from 'react'

import { ID_CONTENT } from 'client/src/common/components/addons/Modal'
import { ChildrenProp } from 'client/src/common/typings'
import { Footer } from 'client/src/modules/layout/app/components/Footer'
import { HeaderTouch } from '../HeaderTouch'
import { NavigationMenuTouch } from '../NavigationMenuTouch'
import * as s from './MainTouch.css'

const MainTouch: FC<ChildrenProp> = ({ children }) => {
  return (
    <>
      <HeaderTouch />
      <main id={ID_CONTENT} className={s.main}>
        {children}
      </main>
      <Footer />
      <NavigationMenuTouch className={s.navigationMenu} />
    </>
  )
}

export default MainTouch
