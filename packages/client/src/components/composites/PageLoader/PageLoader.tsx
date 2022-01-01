import { FC, useState, useEffect } from 'react'

import { Loader } from 'client/src/components/elements/Loader'
import * as s from './PageLoader.css'

const PageLoader: FC = () => {
  const [hide, setHide] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setHide(false), 100)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return hide ? null : <Loader className={s.wrapper} />
}

export default PageLoader
