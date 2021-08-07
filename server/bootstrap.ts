import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { ConfigService } from '@nestjs/config'
import compression from 'compression'
import serve from 'serve-static'

import { resolveApp } from './helpers'
import { AppModule } from './modules'
import { RenderService } from './modules/render'

export async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  const config = app.get(ConfigService)
  const isProdEnv = config.get<boolean>('isProdEnv')
  const port = config.get<number>('port') || NaN

  if (isProdEnv) {
    app.use(compression())
    app.use(serve(resolveApp('dist/client'), { index: false }))

    await app.listen(port)
    return
  }

  const render = app.get(RenderService)
  await render.setupDevServer(app)

  await app.listen(port)

  console.log(`\nServer is started at http://localhost:${port}\n`)
}
