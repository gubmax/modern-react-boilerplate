import { QueryStatuses } from './query.constants'

export interface QueryState<T> {
  status: QueryStatuses
  loading: boolean
  response?: T
  error?: unknown
}

export type QueryAction<T> =
  | { type: QueryStatuses.LOADING }
  | { type: QueryStatuses.SUCCESS; payload: T }
  | { type: QueryStatuses.FAILURE; payload: unknown }
