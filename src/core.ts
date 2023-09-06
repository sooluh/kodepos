import { routes } from './routes'
import type { ProviderList } from './types'
import { SequentialRoundRobin } from 'round-robin-js'
import type { FastifyInstance, FastifyPluginOptions } from 'fastify'

const load = async (app: FastifyInstance, _: FastifyPluginOptions) => {
  const providers = new SequentialRoundRobin<ProviderList>([
    { hostname: 'direktorikodepos.org', segment: 'wilayah' },
    { hostname: 'carikodepos.com', segment: 'daerah' },
  ])

  app.decorate('providers', providers)

  routes(app)
}

export default load
