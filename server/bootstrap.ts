import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { ConfigService } from '@nestjs/config'
import compression from 'compression'
import serve from 'serve-static'

import { AppModule } from './modules'
import { DevelopmentRenderService, RenderService, renderServiceSymbol } from './modules/render'
import { LoggerService, loggerServiceSymbol } from './modules/logger'
import { AllExceptionsFilter } from './common/filters'
import { PATH_RESOLVED_DIST_CLIENT } from './common/constants'

export async function bootstrap(): Promise<NestExpressApplication> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { logger: false })

  // Logger
  const logger = app.get<LoggerService>(loggerServiceSymbol)
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
    app.use(serve(PATH_RESOLVED_DIST_CLIENT, { index: false }))

    const render = app.get<RenderService>(renderServiceSymbol)
    await render.init()

    await app.listen(port)
    return app
  }

  // Development

  const render = app.get<DevelopmentRenderService>(renderServiceSymbol)
  await render.setupDevServer(app)

  await app.listen(port)
  logger.log(`You can now view app in the browser at http://localhost:${port}`)

  return app
}
