import type Fuse from 'fuse.js'
import { DataResult } from '..'

declare module 'fastify' {
  export interface FastifyInstance {
    fuse: Fuse<DataResult>
    data: DataResult[]
  }
}
