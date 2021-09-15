import { useEffect, useRef, useState } from 'react'
import { Action } from 'history'

import { useHistory } from './useHistory'
import { useServerSideProps } from './useServerSideProps'

type MapResponse<T> = T extends () => Promise<infer R> ? R : never

interface State<T> {
  loading: boolean
  res?: MapResponse<T>
}

export function useServerSidePropsLoader<T extends () => Promise<unknown>>(
  fn: T,
): [boolean, MapResponse<T> | undefined] {
  const { action } = useHistory()
  const serverSideProps = useServerSideProps()

  const mountedRef = useRef(false)
  const [state, setState] = useState<State<T>>({
    loading:
      action === Action.Push ||
      (action === Action.Pop && Object.keys(serverSideProps).length === 0),
  })

  useEffect(() => {
    if (!state.loading) return

    mountedRef.current = true

    void fn().then((res) => {
      if (mountedRef.current) {
        setState({ loading: false, res: res as MapResponse<T> })
      }
    })

    return () => {
      mountedRef.current = false
    }
  }, [fn, state.loading])

  return [state.loading, state.res]
}
