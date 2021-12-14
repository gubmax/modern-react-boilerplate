import { ServerSideProps } from 'shared/constants/serverSideProps'
import { PATH_RESOLVED_CLIENT_PAGES } from 'shared/constants/paths'
import { CONFIG_SSR_ROUTES } from 'server/config'
import { InternalServerException } from 'shared/exceptions'
import { HttpClientImpl } from 'shared/http'
import { GetServerSideProps } from 'shared/utils'

export async function fetchPageProps(
  url: string,
  httpClient: HttpClientImpl,
): Promise<ServerSideProps> {
  const { path } = CONFIG_SSR_ROUTES[url] || {}

  if (!path) return {}

  const pageModulePath = PATH_RESOLVED_CLIENT_PAGES
  const { getServerSideProps } = (await import(`${pageModulePath}/${path}`)) as {
    getServerSideProps?: GetServerSideProps<ServerSideProps>
  }

  if (!getServerSideProps) {
    throw new InternalServerException(`Function "getServerSideProps" not found for page "${path}"`)
  }

  return getServerSideProps(httpClient)
}
