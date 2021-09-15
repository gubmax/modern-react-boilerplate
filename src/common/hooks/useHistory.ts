import { useContext } from 'react'
import { BrowserHistory } from 'history'

import { HistoryContext } from 'src/common/contexts'

export function useHistory(): BrowserHistory | Record<string, never> {
  return useContext(HistoryContext)
}
