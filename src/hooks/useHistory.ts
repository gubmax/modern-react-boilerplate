import { useContext } from 'react'
import { BrowserHistory } from 'history'

import { HistoryContext } from 'src/contexts'

export function useHistory(): BrowserHistory | Record<string, never> {
  return useContext(HistoryContext)
}
