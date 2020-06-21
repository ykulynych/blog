import { httpListener } from '@marblejs/core'
import { logger$ } from '@marblejs/middleware-logger'
import { bodyParser$ } from '@marblejs/middleware-body'
import { api$ } from './api'
import { isTestEnv } from './utils'

const middlewares = [logger$({ silent: isTestEnv() }), bodyParser$()]

const effects = [api$]

export const listener = httpListener({
  middlewares,
  effects
})
