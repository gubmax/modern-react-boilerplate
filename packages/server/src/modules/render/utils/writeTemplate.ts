import type { Response } from 'express'
// @ts-expect-error: TODO: Add type
import { renderToPipeableStream as render } from 'react-dom/server'

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
  serverSideProps: ServerSideProps
}

export function writeTemplate({ html, app, res, serverSideProps = {} }: WriteTemplateArg): void {
  let didError = false

  const stream = renderToPipeableStream(app, {
    onCompleteShell() {
      res.statusCode = didError ? 500 : 200
      res.setHeader('Content-type', 'text/html')

      //  Server-side props
      const serverSidePropsTag = `
        <script type="text/javascript" id="serverSideProps">
          window.${SERVER_SIDE_PROPS} = ${JSON.stringify(serverSideProps)};
          document.getElementById('serverSideProps').remove();
        </script>
      `

      // Assets
      html = html.replace(HtmlMarks.ASSETS, `${HtmlMarks.ASSETS}${serverSidePropsTag}`)

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
