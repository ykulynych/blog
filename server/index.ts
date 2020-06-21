import { Server } from './connection'
import { listener } from './app'

const bootstrap = async () => {
  await (await Server.create(listener))()
}

bootstrap()
