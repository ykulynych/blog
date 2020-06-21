import { ENV } from './env'

export enum ENodeEnv {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development'
}

export type TLoggerLevel = 'dev' | 'prod'

interface IConfig {
  env: ENodeEnv
  server: {
    hostname: string
    port: number
  }
  logger: {
    level: TLoggerLevel
  }
}

export const Config: IConfig = {
  env: (process.env.NODE_ENV as ENodeEnv) || ENV.NODE_ENV,
  server: {
    hostname: process.env.HOST || ENV.SERVER_HOST,
    port: Number(process.env.PORT) || ENV.SERVER_PORT
  },
  logger: {
    level: (process.env.LOG_LEVEL as TLoggerLevel) || ENV.LOG_LEVEL
  }
}
