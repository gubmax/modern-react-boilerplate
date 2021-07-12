import { FC } from 'react'
import { useRoutes } from 'react-router-dom'

import { Header } from 'src/components/layout/Header'
import { Sidebar } from 'src/components/layout/Sidebar'
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
