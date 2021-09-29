import { PATH_RESOLVED_CLIENT_PAGES } from 'server/common/constants'
import { CONFIG_SSR_ROUTES } from 'server/config'
import { InternalServerException } from 'shared/exceptions'
import { ServerSideProps } from 'src/common/contexts'

export async function fetchPageProps(url: string): Promise<ServerSideProps> {
  const pageName = CONFIG_SSR_ROUTES[url]

  if (!pageName) return {}

  const pageModulePath = PATH_RESOLVED_CLIENT_PAGES
  const { getServerSideProps } = (await import(`${pageModulePath}/${pageName}`)) as {
    getServerSideProps?: () => Promise<ServerSideProps>
  }

  if (!getServerSideProps) {
    throw new InternalServerException(
      `Function "getServerSideProps" not found for page "${pageName}"`,
    )
  }

  return getServerSideProps()
}
