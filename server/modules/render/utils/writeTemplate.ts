import type { Response } from 'express'
// @ts-expect-error: TODO: Add type
import { renderToPipeableStream as render } from 'react-dom/server'

import { ServerSideProps } from 'src/common/contexts'

const renderToPipeableStream = render as (
  children: JSX.Element,
  options: {
    onCompleteShell(): void
    onError(error: unknown): void
  },
) => {
  pipe: (writable: Response) => void
}

const TAG_EXTERNAL_RESOURCES = '<!--external-resources-->'
const TAG_ROOT_HTML = '<!--root-html-->'

export function writeTemplate(
  template: string,
  appHtml: JSX.Element,
  res: Response,
  serverSideProps: ServerSideProps = {},
): void {
  let didError = false

  const stream = renderToPipeableStream(appHtml, {
    onCompleteShell() {
      res.statusCode = didError ? 500 : 200
      res.setHeader('Content-type', 'text/html')

      //  Server-side props
      const serverSidePropsScript = `
        <script type="text/javascript" id="state">
          window.SERVER_SIDE_PROPS = ${JSON.stringify(serverSideProps)};
          document.getElementById('state').remove();
        </script>
      `

      // External resources
      template = template.replace(
        TAG_EXTERNAL_RESOURCES,
        `${TAG_EXTERNAL_RESOURCES}${serverSidePropsScript}`,
      )

      //  Writing

      const batches = template.split(TAG_ROOT_HTML)

      res.write(batches[0])
      stream.pipe(res)
      res.write(batches[1])
    },
    onError() {
      didError = true
    },
  })
}
