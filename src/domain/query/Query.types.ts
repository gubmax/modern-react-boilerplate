import { QueryStatuses } from './query.constants'

export interface QueryState<T extends unknown> {
  status: QueryStatuses
  loading: boolean
  response?: T
  error?: unknown
}

export type QueryAction<T extends unknown> =
  | { type: QueryStatuses.LOADING }
  | { type: QueryStatuses.SUCCESS; payload: T }
  | { type: QueryStatuses.FAILURE; payload: unknown }
