import { useEffect, useState } from 'react'
import { Action } from 'history'

import { useHistory } from './useHistory'
import { useServerSideProps } from './useServerSideProps'
import { useObservableState } from './useObservableState'
import { ServerSidePropsQueryModel } from 'src/models'

export function useServerSidePropsLoader<T extends unknown>(
  model: ServerSidePropsQueryModel<T>,
): void {
  const { action } = useHistory()
  const serverSideProps = useServerSideProps()

  useState(() => {
    const shouldShowsetInitialLoading =
      action === Action.Push ||
      // If page reload with Service Worker cache
      (action === Action.Pop && Object.keys(serverSideProps).length === 0)

    if (shouldShowsetInitialLoading) {
      model.setInitialLoading()
    }
  })

  useObservableState(model.state$)

  useEffect(() => {
    if (model.state.loading) {
      void model.send()
    }
  }, [model])
}
