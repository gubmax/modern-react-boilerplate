import { createContext } from 'react'

import { Product } from 'src/components/composites/Cart'

export interface ServerSideProps {
  products?: Product[]
}

export const ServerSidePropsContext = createContext<ServerSideProps>({})
