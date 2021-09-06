import { createContext } from 'react'

import { Product } from 'src/domain/entities'

export interface ServerSideProps {
  products?: Product[]
}

export const ServerSidePropsContext = createContext<ServerSideProps>({})
