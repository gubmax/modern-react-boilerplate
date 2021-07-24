import { ComponentType, createContext, memo, MemoExoticComponent, useContext } from 'react'

interface ProvideFn<T> {
  (Component: ComponentType<T>): MemoExoticComponent<(props: T) => JSX.Element>
}

export const providerFactory = <V, P = Record<string, never>>(
  value: (props: P) => V,
): [ProvideFn<P>, () => V] => {
  const Context = createContext<V>({} as V)

  const provide: ProvideFn<P> = (Component) => {
    const DepsProvider = (props: P) => {
      return (
        <Context.Provider value={value(props)}>
          <Component {...props} />
        </Context.Provider>
      )
    }

    return memo(DepsProvider)
  }

  function useDeps() {
    return useContext<V>(Context)
  }

  return [provide, useDeps]
}
