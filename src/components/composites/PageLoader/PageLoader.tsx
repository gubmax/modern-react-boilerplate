import { FC, useState, useEffect, useDeferredValue } from 'react'

import { Loader } from 'src/components/elements'
import * as s from './PageLoader.css'

const PageLoader: FC = () => {
  const [show, setShow] = useState(true)
  const deferredShow = useDeferredValue(show)

  useEffect(() => {
    setShow(false)
  }, [])

  return deferredShow ? <Loader className={s.wrapper} /> : null
}

export default PageLoader
