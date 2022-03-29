import type { Response } from 'express'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { renderToPipeableStream as render } from 'react-dom/server'

import { CLIENT_CONFIG, ClientConfig } from 'shared/constants/clientConfig'
import { SERVER_SIDE_PROPS, ServerSideProps } from 'shared/constants/serverSideProps'
import { HtmlEntries, HtmlMarks } from 'server/src/common/constants/html'
import { PATH_RESOLVED_CLIENT } from 'shared/constants/paths'

const renderToPipeableStream = render as (
  children: JSX.Element,
  options: {
    onAllReady(): void
    onShellError(error: unknown): void
    onFatalError(error: unknown): void
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
  const stream = renderToPipeableStream(app, {
    onAllReady() {
      res.statusCode = 200
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
    onShellError(error) {
      res.statusCode = 500
      res.sendFile(`${PATH_RESOLVED_CLIENT}/${HtmlEntries.MAIN}.html`)
      console.error(error) // TODO: replace with logger
    },
    onFatalError(error) {
      res.statusCode = 500
      res.sendFile(`${PATH_RESOLVED_CLIENT}/${HtmlEntries.INTERNAL_ERROR}.html`)
      console.error(error) // TODO: replace with logger
    },
  })
}
