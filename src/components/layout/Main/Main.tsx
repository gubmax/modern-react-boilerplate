import { FC } from 'react'
import { useRoutes } from 'react-router-dom'

import { Header } from '../Header'
import { Sidebar } from '../Sidebar'
import { ROUTES } from './Main.constants'
import * as s from './Main.css'

const Main: FC = () => {
  const element = useRoutes(ROUTES)

  return (
    <div className={s.page}>
      <Header />
      <Sidebar />
      <main className={s.main}>{element}</main>
    </div>
  )
}

export default Main
