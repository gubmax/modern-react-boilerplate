import { createContext } from 'react'

import { Product } from 'client/src/components/composites/Cart'

export interface ServerSideProps {
  products?: Product[]
}

export const ServerSidePropsContext = createContext<ServerSideProps>({})
