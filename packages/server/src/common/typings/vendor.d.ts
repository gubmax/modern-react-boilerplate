declare namespace globalThis {
  var hot: {
    dispose(callback: () => Promise<void>): void
    accept(callback: () => Promise<void>): void
  }
}
