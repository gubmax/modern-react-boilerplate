import { CONFIG_SSR_ROUTES } from 'server/config'
import { ServerSideProps } from 'shared/constants/serverSideProps'
import { HttpClientImpl } from 'shared/http/types'

export async function fetchPageProps(
  url: string,
  httpClient: HttpClientImpl,
): Promise<ServerSideProps> {
  const { getServerSideProps } = CONFIG_SSR_ROUTES[url] ?? {}

  if (!getServerSideProps) return {}

  return getServerSideProps(httpClient)
}
