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
export interface JSONPatch<V, P extends string = string, F extends string = string> {
  op: JSONPatchOperations
  path: P
  from?: F
  value?: V
}
