import { useContext } from 'react'

import { ServerSideProps, ServerSidePropsContext } from 'src/contexts'

export function useServerSideProps(): ServerSideProps {
  return useContext(ServerSidePropsContext)
}
