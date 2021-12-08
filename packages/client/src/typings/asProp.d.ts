import { ReactHTML } from 'react'

export interface AsProp<T extends keyof ReactHTML = keyof ReactHTML> {
  as?: T
}
