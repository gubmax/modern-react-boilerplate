import { useContext, useMemo } from 'react'
import { interfaces } from 'inversify'

import { FatalException } from 'src/domain/exceptions'
import { IocContainerContext } from '../contexts'

export function useInject<T>(identifier: interfaces.ServiceIdentifier<T>): T {
  const container = useContext(IocContainerContext)

  if (!container) {
    throw new FatalException({ message: 'IoC container not found' })
  }

  return useMemo(() => container.get<T>(identifier), [container, identifier])
}
