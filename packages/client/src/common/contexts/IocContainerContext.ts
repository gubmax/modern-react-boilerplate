import { createContext } from 'react'
import { Container } from 'inversify'

export const IocContainerContext = createContext<Container | null>(null)
