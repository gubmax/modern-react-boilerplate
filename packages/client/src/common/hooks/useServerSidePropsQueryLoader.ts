import { useEffect } from 'react'
import { Action } from 'history'

import { SERVER_SIDE_PROPS, ServerSideProps } from 'shared/constants/serverSideProps'
import { ServerSidePropsQueryModel } from 'client/src/common/models/queries'
import { useInit } from './useInit'
import { useHistory } from './useHistory'
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
      sspQueryModel.setInitialLoading()
    }

    return sspQueryModel
  })

  useEffect(() => {
    if (model.state.loading) {
      void model.send()
    }
  }, [model])
}
