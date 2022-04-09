import { delay, filter, tap } from 'rxjs'
import { inject, singleton } from 'tsyringe'

import { PreloadChunksModel } from 'client/src/common/models/preloadChunks.model'
import { QueryStatuses } from 'client/src/common/models/queries/query'
import { LOADING_OPACITY_TRANSITION_DELAY } from '../components/ProgressBar'

@singleton()
export class ProgressBarFadeTransitionModel {
  constructor(
    @inject(PreloadChunksModel) protected readonly preloadChunksModel: PreloadChunksModel,
  ) {
    preloadChunksModel.query$
      .pipe(
        filter((state) => state.status === QueryStatuses.SUCCESS),
        delay(LOADING_OPACITY_TRANSITION_DELAY),
        tap(() => preloadChunksModel.reset()),
      )
      .subscribe()
  }
}
