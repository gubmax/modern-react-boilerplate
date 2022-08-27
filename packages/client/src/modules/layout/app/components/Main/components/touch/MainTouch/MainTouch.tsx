import { FC } from 'react'

import { SELECTOR_CONTENT } from 'client/src/common/components/addons/Modal'
import { cn } from 'client/src/common/helpers/classNames'
import { ChildrenProp } from 'client/src/common/typings'
import { Footer } from '../../Footer'
import { HeaderTouch } from '../HeaderTouch'
import { NavigationMenuTouch } from '../NavigationMenuTouch'
import * as s from './MainTouch.css'

const MainTouch: FC<ChildrenProp> = ({ children }) => {
  return (
    <>
      <HeaderTouch />
      <main className={cn(SELECTOR_CONTENT, s.main)}>{children}</main>
      <Footer />
      <NavigationMenuTouch className={s.navigationMenu} />
    </>
  )
}

export default MainTouch
