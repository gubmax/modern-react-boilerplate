import { FC } from 'react'
import { useOutlet } from 'react-router-dom'

import { NavigationList } from 'client/src/components/composites/NavigationList'
import { Header } from '../Header'
import * as s from './Main.css'

const Main: FC = () => {
  const element = useOutlet()

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
