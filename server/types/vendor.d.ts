declare namespace NodeJS {
  interface Global {
    // TODO: Override NodeJS.Global.fetch type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fetch: any
  }
}
