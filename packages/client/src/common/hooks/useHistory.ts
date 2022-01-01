import { useContext } from 'react'
import { BrowserHistory } from 'history'

import { HistoryContext } from 'client/src/common/contexts/HistoryContext'

export function useHistory(): BrowserHistory | Record<string, never> {
  return useContext(HistoryContext)
}
