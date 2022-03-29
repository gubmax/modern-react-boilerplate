import { FC } from 'react'
import { useOutlet } from 'react-router-dom'

import { NavigationList } from 'client/src/components/composites/NavigationList'
import { ProgressBar } from '../ProgressBar'
import { Header } from '../Header'
import * as s from './Main.css'

const Main: FC = () => {
  const element = useOutlet()

  return (
    <div className={s.wrapper}>
      <ProgressBar />
      <Header className={s.header} />
      <div className={s.page}>
        <aside className={s.sidebar}>
          <NavigationList />
        </aside>
        <main className={s.main}>{element}</main>
      </div>
    </div>
  )
}

export default Main
