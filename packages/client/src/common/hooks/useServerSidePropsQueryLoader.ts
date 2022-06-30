import { useEffect, useRef } from 'react'
import { Action } from 'history'

import { ServerSidePropsQueryModel } from 'client/src/common/models/queries/serverSideProps'
import { SERVER_SIDE_PROPS, ServerSideProps } from 'shared/constants/serverSideProps'
import { useAction } from './useAction'
import { useInject } from './useInject'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

export function useServerSidePropsQueryLoader<T>(
  sspQueryModel: ServerSidePropsQueryModel<T>,
): void {
  const modelRef = useRef<ServerSidePropsQueryModel<T>>()
  const action = useAction()
  const serverSideProps = useInject<ServerSideProps>(SERVER_SIDE_PROPS)

  useIsomorphicLayoutEffect(() => {
    const shouldSetInitialLoading =
      action === Action.Push ||
      // If page reload with Service Worker cache
      (action === Action.Pop && Object.keys(serverSideProps).length === 0)

    if (shouldSetInitialLoading) {
      sspQueryModel.setLoading()
    }

    modelRef.current = sspQueryModel
  }, [])

  useEffect(() => {
    const model = modelRef.current

    if (model?.query$.value.loading) {
      void model.send()
    }
  }, [])
}
