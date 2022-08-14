import { FC, memo } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'
import { ButtonVariants } from 'client/src/common/components/inputs/buttons/BaseButton'
import { Button } from 'client/src/common/components/inputs/buttons/Button'
import { cn } from 'client/src/common/helpers/classNames'
import { StyledProps } from 'client/src/common/typings'
import * as s from './NotFound.css'

const NotFound: FC<StyledProps> = ({ className, style }) => {
  return (
    <section className={cn(s.wrapper, className)} style={style}>
      <span className={s.title}>404</span>
      <h1 className={s.text}>Page Not Found</h1>
      <Button as="a" href={PageRoutes.ROOT} variant={ButtonVariants.PRIMARY}>
        Go home
      </Button>
    </section>
  )
}

export default memo(NotFound)
