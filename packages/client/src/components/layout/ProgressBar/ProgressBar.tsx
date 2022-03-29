import { FC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { useInject } from 'client/src/common/hooks/useInject'
import { useObservableState } from 'client/src/common/hooks/useObservableState'
import { PreloadChunksModel } from 'client/src/common/models/PreloadChunks.model'
import { QueryStatuses } from 'client/src/common/models/queries/query'
import { ProgressBarFadeTransitionModel } from './models/ProgressBarFadeTransition.model'
import * as s from './ProgressBar.css'

const ProgressBar: FC = () => {
  useInject(ProgressBarFadeTransitionModel)
  const { query$, status } = useInject(PreloadChunksModel)

  useObservableState(query$)

  return (
    <div
      className={cn(
        s.wrapper,
        status === QueryStatuses.LOADING && s.loading,
        status === QueryStatuses.SUCCESS && s.loadingEnd,
      )}
    ></div>
  )
}

export default ProgressBar
