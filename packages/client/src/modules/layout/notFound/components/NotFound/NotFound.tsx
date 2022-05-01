import { FC } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'
import { ButtonVariants } from 'client/src/common/components/inputs/buttons/BaseButton'
import { Button } from 'client/src/common/components/inputs/buttons/Button'
import { useLink } from 'client/src/common/hooks/useLink'
import * as s from './NotFound.css'

const NotFound: FC = () => {
  const navigateToRootPage = useLink(PageRoutes.ROOT)

  return (
    <section className={s.wrapper}>
      <span className={s.title}>404</span>
      <h1 className={s.text}>Page Not Found</h1>
      <Button as="a" variant={ButtonVariants.PRIMARY} onClick={navigateToRootPage}>
        Go home
      </Button>
    </section>
  )
}

export default NotFound
