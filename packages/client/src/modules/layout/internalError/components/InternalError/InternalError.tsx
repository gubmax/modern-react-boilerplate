import { FC } from 'react'

import { typography } from 'client/src/common/styles/shared/typography.css'
import * as s from './InternalError.css'

const InternalError: FC = () => {
  return (
    <section className={s.wrapper}>
      <h1 className={typography.h1}>Oops!</h1>
      <h2 className={typography.h2}>
        Something went wrong. <br /> Please try again later.
      </h2>
    </section>
  )
}

export default InternalError
