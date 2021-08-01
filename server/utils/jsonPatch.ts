export enum JSONPatchOperations {
  add = 'add',
  remove = 'remove',
  replace = 'replace',
  copy = 'copy',
  move = 'move',
  test = 'test',
}

/**
 * @link https://datatracker.ietf.org/doc/html/rfc6902
 */
export interface JSONPatch<T extends unknown = unknown> {
  op: JSONPatchOperations
  path: string
  from?: string
  value?: T
}
