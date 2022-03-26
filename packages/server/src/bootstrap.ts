import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { ConfigService } from '@nestjs/config'
import compression from 'compression'
import serve from 'serve-static'

import { PATH_RESOLVED_CLIENT } from 'shared/constants/paths'
import { AppModule } from './modules/app.module'
import { DevelopmentRenderService, RenderService, renderServiceSymbol } from './modules/render'
import { LoggerService, loggerServiceSymbol } from './modules/logger'
import { AllExceptionsFilter } from './common/filters'

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
  const port = config.get<number>('port') || NaN

  // Production
  if (isProdEnv) {
    const render = app.get<RenderService>(renderServiceSymbol)

    app.use(compression())
    app.use(serve(PATH_RESOLVED_CLIENT, { index: false }))

    render.init()
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
