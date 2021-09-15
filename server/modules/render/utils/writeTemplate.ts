import type { Response } from 'express'
// @ts-expect-error: TODO: Add type
import { pipeToNodeWritable } from 'react-dom/server'
import { ServerSideProps } from 'src/common/contexts'

const SAFE_pipeToNodeWritable = pipeToNodeWritable as (
  appHtml: JSX.Element,
  res: Response,
  obj: {
    onReadyToStream(): void
    onError(): void
  },
) => {
  startWriting: () => void
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

  const { startWriting } = SAFE_pipeToNodeWritable(appHtml, res, {
    onReadyToStream() {
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
      startWriting()
      res.write(batches[1])
    },
    onError() {
      didError = true
    },
  })
}
