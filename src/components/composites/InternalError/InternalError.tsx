import { FC } from 'react'

import * as s from './InternalError.css'
import { H1, H2 } from 'src/components/typography'

import 'src/styles/common.css'
import 'src/styles/global.css'

export const InternalError: FC = () => {
  return (
    <section className={s.wrapper}>
      <H1>Oops!</H1>
      <H2>
        Something went wrong. <br /> Please try again later.
      </H2>
    </section>
  )
}
