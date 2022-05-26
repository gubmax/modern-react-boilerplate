import { CONFIG_SSR_ROUTES } from 'server/config'
import { PATH_RESOLVED_CLIENT } from 'shared/constants/paths'
import { ServerSideProps } from 'shared/constants/serverSideProps'
import { InternalServerException } from 'shared/exceptions'
import { HttpClientImpl } from 'shared/http/types'
import { GetServerSideProps } from 'shared/utils/serverSideProps'

export async function fetchPageProps(
  url: string,
  httpClient: HttpClientImpl,
): Promise<ServerSideProps> {
  const { path } = CONFIG_SSR_ROUTES[url] ?? {}

  if (!path) return {}

  const { getServerSideProps } = (await require(`${PATH_RESOLVED_CLIENT}/${path}`)) as {
    getServerSideProps?: GetServerSideProps<ServerSideProps>
  }

  if (!getServerSideProps) {
    throw new InternalServerException(`Function "getServerSideProps" not found for page "${path}"`)
  }

  return getServerSideProps(httpClient)
}
