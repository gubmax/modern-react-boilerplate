import { ComponentType, Context } from 'react'

export const provideContext =
  <T extends unknown>(ProvidedContext: Context<T>, injectedValue: T) =>
  <P extends Record<string, unknown>>(Component: ComponentType<P>) => {
    return function ContextProvider(props: P): JSX.Element {
      return (
        <ProvidedContext.Provider value={injectedValue}>
          <Component {...props} />
        </ProvidedContext.Provider>
      )
    }
  }
