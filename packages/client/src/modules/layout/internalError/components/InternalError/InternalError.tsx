import { FC } from 'react'

import { dt } from 'client/src/common/styles/designTokens'
import * as s from './InternalError.css'

const InternalError: FC = () => {
  return (
    <section className={s.wrapper}>
      <h1 className={s.title}>Oops!</h1>
      <h2 className={dt.style.typography.h2}>
        Something went wrong. <br /> Please try again later.
      </h2>
    </section>
  )
}

export default InternalError
