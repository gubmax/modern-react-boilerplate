import { useContext, useMemo } from 'react'
import { InjectionToken } from 'tsyringe'

import { assert } from 'client/src/utils/assert'
import { IocContainerContext } from '../contexts/IocContainerContext'

export function useInject<T>(identifier: InjectionToken<T>): T {
  const container = useContext(IocContainerContext)

  assert(container, 'IoC container not found')

  return useMemo(() => container.resolve<T>(identifier), [container, identifier])
}
