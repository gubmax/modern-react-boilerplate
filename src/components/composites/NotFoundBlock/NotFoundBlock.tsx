import { FC } from 'react'

import { useLink } from 'src/common/hooks'
import { Button } from 'src/components/inputs'
import { H1 } from 'src/components/typography'
import { PageRoutes } from 'src/infra/http'
import * as s from './NotFoundBlock.css'

const NotFoundBlock: FC = () => {
  const navigate = useLink(PageRoutes.ROOT)

  return (
    <section className={s.wrapper}>
      <span className={s.title}>404</span>
      <H1>Page Not Found</H1>
      <Button as="a" primary onClick={navigate}>
        Go home
      </Button>
    </section>
  )
}

export default NotFoundBlock
