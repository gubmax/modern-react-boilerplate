export function autobind<T extends unknown>(target: T): void {
  for (const p of Object.getOwnPropertyNames(Object.getPrototypeOf(target))) {
    const prop = p as keyof T
    const currProp = target[prop]

    if (currProp instanceof Function) {
      target[prop] = currProp.bind(target) as typeof currProp
    }
  }
}
