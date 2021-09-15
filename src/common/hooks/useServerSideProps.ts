import { useContext } from 'react'

import { ServerSideProps, ServerSidePropsContext } from 'src/common/contexts'

export function useServerSideProps(): ServerSideProps {
  return useContext(ServerSidePropsContext)
}
