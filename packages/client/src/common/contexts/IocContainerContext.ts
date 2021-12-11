import { createContext } from 'react'
import { DependencyContainer } from 'tsyringe'

export const IocContainerContext = createContext<DependencyContainer | null>(null)
