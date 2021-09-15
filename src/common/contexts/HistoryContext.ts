import { createContext } from 'react'
import { BrowserHistory } from 'history'

export const HistoryContext = createContext<BrowserHistory | Record<string, never>>({})
