import { useContext } from 'react'

import { ServerSideProps, ServerSidePropsContext } from 'client/src/common/contexts'

export function useServerSideProps(): ServerSideProps {
  return useContext(ServerSidePropsContext)
}
