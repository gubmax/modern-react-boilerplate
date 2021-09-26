import { useEffect } from 'react'
import { Action } from 'history'

import {
  GetServerSideProps,
  ServerSidePropsModelFactory,
  serverSidePropsModelFactorySymbol,
  ServerSidePropsQueryModel,
} from 'src/models/queries'
import { useInit } from './useInit'
import { useHistory } from './useHistory'
import { useServerSideProps } from './useServerSideProps'
import { useInject } from './useInject'

export function useServerSidePropsQueryLoader<T extends unknown>(
  getServerSideProps: GetServerSideProps<T>,
): ServerSidePropsQueryModel<T> {
  const sspQueryModelFactory = useInject<ServerSidePropsModelFactory>(
    serverSidePropsModelFactorySymbol,
  )

  const { action } = useHistory()
  const serverSideProps = useServerSideProps()

  const model = useInit(() => {
    const sspQueryModel = sspQueryModelFactory(getServerSideProps)

    const shouldShowsetInitialLoading =
      action === Action.Push ||
      // If page reload with Service Worker cache
      (action === Action.Pop && Object.keys(serverSideProps).length === 0)

    if (shouldShowsetInitialLoading) {
      sspQueryModel.setInitialLoading()
    }

    return sspQueryModel
  })

  useEffect(() => {
    if (model.state.loading) {
      void model.send()
    }
  }, [model])

  return model
}
