import { useContext, useMemo } from 'react'
import { InjectionToken } from 'tsyringe'

import { FatalException } from 'client/src/common/domain/exceptions'
import { IocContainerContext } from '../contexts'

export function useInject<T>(identifier: InjectionToken<T>): T {
  const container = useContext(IocContainerContext)

  if (!container) {
    throw new FatalException({ message: 'IoC container not found' })
  }

  return useMemo(() => container.resolve<T>(identifier), [container, identifier])
}
