import { Context, HttpListener, createServer } from '@marblejs/core'
import { Reader } from 'fp-ts/lib/Reader'
// import chalk from 'chalk'
import { Config } from '../config'

export namespace Server {
  const { hostname, port } = Config.server

  // const onListen = () => {
  //   console.info(chalk.green('[server] running'), `@ http://${host}:${port}/`)
  // }

  // const onClose = () => {
  //   console.info(chalk.green(`[server] stopped`))
  // }

  // const onError = (error: Error) => {
  //   console.error(chalk.red('[server] errored'), error.message)
  // }

  export const create = async (listener: Reader<Context, HttpListener>) =>
    createServer({
      port,
      hostname,
      listener
    })
}
