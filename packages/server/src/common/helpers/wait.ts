export const wait = (timeout = 2000): Promise<void> =>
  new Promise((resolve) => setTimeout(() => resolve(), timeout))
