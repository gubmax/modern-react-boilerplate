import { JSONPatch } from 'server/utils'

export type UpdateAmountBody = JSONPatch<{
  id: string
}>
