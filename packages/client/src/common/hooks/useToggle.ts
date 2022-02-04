import { Dispatch, Reducer, useReducer } from 'react'

const toggleReducer: Reducer<boolean, boolean | void> = (prevState, nextValue) =>
  typeof nextValue === 'boolean' ? nextValue : !prevState

export const useToggle = (initialValue = false): [boolean, Dispatch<boolean> & (() => void)] => {
  return useReducer(toggleReducer, initialValue)
}
