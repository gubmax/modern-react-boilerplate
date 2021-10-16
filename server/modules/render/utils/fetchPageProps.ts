import { PATH_RESOLVED_CLIENT_PAGES } from 'server/common/constants'
import { CONFIG_SSR_ROUTES } from 'server/config'
import { InternalServerException } from 'shared/exceptions'
import { HttpClientImpl } from 'shared/http'
import { GetServerSideProps } from 'shared/utils'
import { ServerSideProps } from 'src/common/contexts'

export async function fetchPageProps(
  url: string,
  httpClient: HttpClientImpl,
): Promise<ServerSideProps> {
  const pageName = CONFIG_SSR_ROUTES[url]

  if (!pageName) return {}

  const pageModulePath = PATH_RESOLVED_CLIENT_PAGES
  const { getServerSideProps } = (await import(`${pageModulePath}/${pageName}`)) as {
    getServerSideProps?: GetServerSideProps<ServerSideProps>
  }

  if (!getServerSideProps) {
    throw new InternalServerException(
      `Function "getServerSideProps" not found for page "${pageName}"`,
    )
  }

  return getServerSideProps(httpClient)
}
