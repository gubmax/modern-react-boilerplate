import type { Response } from 'express'
// @ts-expect-error: TODO: Add type
import { pipeToNodeWritable } from 'react-dom/server'

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

export function writeTemplate(template: string, appHtml: JSX.Element, res: Response): void {
  let didError = false

  const { startWriting } = SAFE_pipeToNodeWritable(appHtml, res, {
    onReadyToStream() {
      res.statusCode = didError ? 500 : 200
      res.setHeader('Content-type', 'text/html')

      const batches = template.split('<!--root-html-->')

      res.write(batches[0])
      startWriting()
      res.write(batches[1])
    },
    onError() {
      didError = true
    },
  })
}
