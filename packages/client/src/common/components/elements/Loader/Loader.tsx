import { FC, memo } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { LoaderProps } from './Loader.types'
import * as s from './Loader.css'

const Loader: FC<LoaderProps> = ({ small, secondary, className, ...rest }) => {
  return (
    <span className={cn(s.loader, className)} {...rest}>
      <span className={cn(s.spinner, small && s.spinnerSmall, secondary && s.spinnerSecondary)} />
    </span>
  )
}

export default memo(Loader)
