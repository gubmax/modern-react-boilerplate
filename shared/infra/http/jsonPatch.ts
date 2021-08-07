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
export interface JSONPatch<
  V extends unknown = unknown,
  O extends JSONPatchOperations = JSONPatchOperations,
  P extends string = string,
  F extends string = string,
> {
  op: O
  path: P
  from?: F
  value?: V
}
