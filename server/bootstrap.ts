import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { ConfigService } from '@nestjs/config'
import compression from 'compression'
import serve from 'serve-static'

import { resolveApp } from './helpers'
import { AppModule } from './modules'
import { RenderService } from './modules/render'
import { LoggerService, LOGGER_SERVICE } from './modules/logger'
import { AllExceptionsFilter } from './common/filters'

export async function bootstrap(): Promise<NestExpressApplication> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { logger: false })

  // Logger
  const logger = app.get<LoggerService>(LOGGER_SERVICE)
  app.useLogger(logger)

  // Exceptions
  app.useGlobalFilters(new AllExceptionsFilter(logger))

  // Config
  const config = app.get(ConfigService)
  const isProdEnv = config.get<boolean>('isProdEnv')
  const port = config.get<number>('port') || NaN

  // Production
  if (isProdEnv) {
    app.use(compression())
    app.use(serve(resolveApp('dist/client'), { index: false }))

    await app.listen(port)
    return app
  }

  // Development

  const render = app.get(RenderService)
  await render.setupDevServer(app)

  await app.listen(port)
  logger.log(`You can now view app in the browser at http://localhost:${port}`)

  return app
}
