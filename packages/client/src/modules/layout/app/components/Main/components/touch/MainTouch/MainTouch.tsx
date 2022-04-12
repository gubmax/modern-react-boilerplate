import { FC } from 'react'

import { ChildrenProp } from 'client/src/common/typings'
import { HeaderTouch } from '../HeaderTouch'
import { NavigationMenuTouch } from '../NavigationMenuTouch'
import * as s from './MainTouch.css'

const MainTouch: FC<ChildrenProp> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <HeaderTouch />
      <main>{children}</main>
      <NavigationMenuTouch className={s.navigationMenu} />
    </div>
  )
}

export default MainTouch
