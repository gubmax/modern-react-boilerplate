// TODO: Remove eslint disabling
/* eslint-disable */
import { resolve } from 'path'
import { readFileSync } from 'fs'
import type { Request, Response } from 'express'
import type { ViteDevServer } from 'vite'
// @ts-ignore
import { pipeToNodeWritable } from 'react-dom/server'

import { resolveApp } from './helpers/resolveApp'

function writeTemplate(template: string, entry: JSX.Element, res: Response) {
  let didError = false

  const { startWriting } = pipeToNodeWritable(entry, res, {
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

export function render(req: Request, res: Response): void {
  const exec = async () => {
    const template = readFileSync(resolveApp('dist/client/index.html'), 'utf-8')
    const { default: entry } = await import(resolveApp('dist/server/entry'))

    writeTemplate(template, entry, res)
  }

  try {
    void exec()
  } catch (error: unknown) {
    console.log(error)
    res.status(500).end(error)
  }
}

export function devRender(devServer: ViteDevServer): (req: Request, res: Response) => void {
  return (req: Request, res: Response) => {
    const exec = async () => {
      const url = req.originalUrl

      const html = readFileSync(resolveApp('index.html'), 'utf-8')
      const template = await devServer.transformIndexHtml(url, html)
      const { entry } = await devServer.ssrLoadModule('server/entry')

      writeTemplate(template, entry, res)
    }

    try {
      void exec()
    } catch (error: unknown) {
      if (error instanceof Error) {
        devServer.ssrFixStacktrace(error)
      }

      console.log(error)
      res.status(500).end(error)
    }
  }
}
