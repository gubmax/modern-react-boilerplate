import { FC } from 'react'

import { ChildrenProp } from 'client/src/common/typings'
import { HeaderTouch } from '../HeaderTouch'
import { NavigationMenuTouch } from '../NavigationMenuTouch'
import * as s from './MainTouch.css'

const MainTouch: FC<ChildrenProp> = ({ children }) => {
  return (
    <>
      <HeaderTouch />
      <main id="main" className={s.main}>
        {children}
      </main>
      <NavigationMenuTouch className={s.navigationMenu} />
    </>
  )
}

export default MainTouch
