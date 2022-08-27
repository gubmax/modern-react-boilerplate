import { FC, memo } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { useBehaviorSubjectSubscription } from 'client/src/common/hooks/useBehaviorSubjectSubscription'
import { useInject } from 'client/src/common/hooks/useInject'
import { PreloadChunksModel } from 'client/src/common/models/preloadChunks.model'
import { QueryStatuses } from 'client/src/common/models/queries/query'
import { ProgressBarModel } from './models/progressBar.model'
import * as s from './ProgressBar.css'

const ProgressBar: FC = () => {
  useInject(ProgressBarModel)
  const { query$ } = useInject(PreloadChunksModel)
  const { status } = useBehaviorSubjectSubscription(query$)

  return (
    <div
      className={cn(
        s.wrapper,
        status === QueryStatuses.LOADING && s.loading,
        status === QueryStatuses.SUCCESS && s.loadingEnd,
      )}
    />
  )
}

export default memo(ProgressBar)
