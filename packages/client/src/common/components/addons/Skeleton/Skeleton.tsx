import { FC, memo } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { SkeletonProps } from './Skeleton.types'
import * as s from './Skeleton.css'

const Skeleton: FC<SkeletonProps> = ({ width, height, withoutMargin, className, style }) => {
  return (
    <div
      className={cn(s.wrapper, !withoutMargin && s.margin, s.shim, className)}
      style={{ width, height, ...style }}
    />
  )
}

export default memo(Skeleton)
