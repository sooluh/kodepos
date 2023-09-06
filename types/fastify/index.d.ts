import type { ProviderList } from '../../src/types'
import type { SequentialRoundRobin } from 'round-robin-js'

declare module 'fastify' {
  export interface FastifyInstance {
    providers: SequentialRoundRobin<ProviderList>
  }
}
