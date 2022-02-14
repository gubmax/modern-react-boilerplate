import { FC } from 'react'

import { useLink } from 'client/src/common/hooks/useLink'
import { Button } from 'client/src/components/inputs/buttons/Button'
import { H1 } from 'client/src/components/typography/Heading'
import { PageRoutes } from 'client/src/browser/http/constants'
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
