import { useContext, useMemo } from 'react'
import { InjectionToken } from 'tsyringe'

import { invariant } from 'client/src/common/helpers/invariant'
import { IocContainerContext } from '../contexts/IocContainerContext'

export function useInject<T>(identifier: InjectionToken<T>): T {
  const container = useContext(IocContainerContext)

  invariant(container, 'IoC container not found')

  return useMemo(() => container.resolve<T>(identifier), [container, identifier])
}
