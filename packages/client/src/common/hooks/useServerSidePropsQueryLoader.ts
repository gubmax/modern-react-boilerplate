import { useEffect } from 'react'
import { Action } from 'history'

import { ServerSidePropsQueryModel } from 'client/src/common/models/queries/serverSideProps'
import { SERVER_SIDE_PROPS, ServerSideProps } from 'shared/constants/serverSideProps'
import { useHistory } from './useHistory'
import { useInit } from './useInit'
import { useInject } from './useInject'

export function useServerSidePropsQueryLoader<T>(
  sspQueryModel: ServerSidePropsQueryModel<T>,
): void {
  const { action } = useHistory()
  const serverSideProps = useInject<ServerSideProps>(SERVER_SIDE_PROPS)

  const model = useInit(() => {
    const shouldSetInitialLoading =
      action === Action.Push ||
      // If page reload with Service Worker cache
      (action === Action.Pop && Object.keys(serverSideProps).length === 0)

    if (shouldSetInitialLoading) {
      sspQueryModel.setLoading()
    }

    return sspQueryModel
  })

  useEffect(() => {
    if (model.query$.value.loading) {
      void model.send()
    }
  }, [model])
}
