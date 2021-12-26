import { StaticRouter } from 'react-router-dom/server'

import { ServerSideProps, SERVER_SIDE_PROPS } from 'shared/constants/serverSideProps'
import { App } from 'client/src/components/layout/App'
import { iocContainer } from 'client/src/utils'

import 'client/src/common/styles/common.css'
import 'client/src/common/styles/global.css'

export function renderServerMainTemplate(
  url: string,
  serverSideProps?: ServerSideProps,
): JSX.Element {
  const childContainer = iocContainer.createChildContainer()
  childContainer.register(SERVER_SIDE_PROPS, { useValue: serverSideProps })

  return (
    <StaticRouter location={url}>
      <App iocContainer={childContainer} />
    </StaticRouter>
  )
}
