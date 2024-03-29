import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import compression from 'compression'

import { AllExceptionsFilter } from './common/filters'
import { NotFoundExceptionFilter } from './common/filters/notFoundException.filter'
import { AppModule } from './modules/app.module'
import { LoggerService, loggerServiceSymbol } from './modules/logger'
import { DevelopmentRenderService, RenderService, renderServiceSymbol } from './modules/render'

export async function bootstrap(): Promise<NestExpressApplication> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { bufferLogs: true })

  // Logger
  const logger = app.get<LoggerService>(loggerServiceSymbol)
  app.useLogger(logger)

  // Exceptions
  app.useGlobalFilters(new AllExceptionsFilter())

  // Config
  const config = app.get(ConfigService)
  const isProdEnv = config.get<boolean>('isProdEnv')
  const port = config.get<number>('port') ?? NaN

  // Production
  if (isProdEnv) {
    const render = app.get<RenderService>(renderServiceSymbol)

    app.useGlobalFilters(new NotFoundExceptionFilter(render))

    app.use(compression())

    await render.init()
    await app.listen(port)

    return app
  }

  // Development

  const render = app.get<DevelopmentRenderService>(renderServiceSymbol)

  app.useGlobalFilters(new NotFoundExceptionFilter(render))

  await render.setupDevServer(app)
  await app.listen(port)

  logger.log(`You can now view app in the browser at http://localhost:${port}`)

  return app
}
