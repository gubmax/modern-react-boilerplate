import { FC } from 'react'
import { useRoutes } from 'react-router-dom'

import { NavigationList } from 'src/components/composites'
import { Header } from '../Header'
import { ROUTES } from './Main.constants'
import * as s from './Main.css'

const Main: FC = () => {
  const element = useRoutes(ROUTES)

  return (
    <div className={s.page}>
      <Header className={s.header} />
      <aside className={s.sidebar}>
        <NavigationList />
      </aside>
      <main className={s.main}>{element}</main>
    </div>
  )
}

export default Main
