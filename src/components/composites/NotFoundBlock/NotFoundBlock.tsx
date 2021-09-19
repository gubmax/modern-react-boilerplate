import { FC } from 'react'
import { Link } from 'src/components/auxiliary'

import { H1 } from 'src/components/typography'
import { PageRoutes } from 'src/infra/http'
import * as s from './NotFoundBlock.css'

const NotFoundBlock: FC = () => {
  return (
    <section className={s.wrapper}>
      <span className={s.title}>404</span>
      <H1>Page Not Found</H1>
      <Link to={PageRoutes.ROOT}>Go home</Link>
    </section>
  )
}

export default NotFoundBlock
