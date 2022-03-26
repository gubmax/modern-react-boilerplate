import type { Response } from 'express'
// @ts-expect-error: TODO: Add type
import { renderToPipeableStream as render } from 'react-dom/server'

import { CLIENT_CONFIG, ClientConfig } from 'shared/constants/clientConfig'
import { SERVER_SIDE_PROPS, ServerSideProps } from 'shared/constants/serverSideProps'
import { HtmlMarks } from 'server/src/common/constants/html'

const renderToPipeableStream = render as (
  children: JSX.Element,
  options: {
    onCompleteShell(): void
    onError(error: unknown): void
  },
) => {
  pipe: (writable: Response) => void
}

interface WriteTemplateArg {
  html: string
  app: JSX.Element
  res: Response
  clientConfig: ClientConfig
  serverSideProps: ServerSideProps
}

export function writeTemplate({
  html,
  app,
  res,
  clientConfig = {},
  serverSideProps = {},
}: WriteTemplateArg): void {
  let didError = false

  const stream = renderToPipeableStream(app, {
    onCompleteShell() {
      res.statusCode = didError ? 500 : 200
      res.setHeader('Content-type', 'text/html')

      //  Initial data
      const initialDataTag = `
        <script type="text/javascript" id="initialData">
          window.${CLIENT_CONFIG} = ${JSON.stringify(clientConfig)};
          window.${SERVER_SIDE_PROPS} = ${JSON.stringify(serverSideProps)};
          document.getElementById('initialData').remove();
        </script>
      `

      // Assets
      html = html.replace(HtmlMarks.ASSETS, `${HtmlMarks.ASSETS}${initialDataTag}`)

      //  Writing

      const batches = html.split(HtmlMarks.SSR_OUTLER)

      res.write(batches[0])
      stream.pipe(res)
      res.write(batches[1])
    },
    onError(error) {
      console.error(error) // TODO: replace with logger
      didError = true
    },
  })
}
