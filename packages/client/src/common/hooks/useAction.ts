import { useContext } from 'react'
import { Action } from 'history'

import { HistoryContext } from 'client/src/common/contexts/HistoryContext'

export function useAction(): Action {
  return useContext(HistoryContext).action
}
