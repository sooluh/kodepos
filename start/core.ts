import Fuse from 'fuse.js'
import * as path from 'path'
import { routes } from './routes'
import * as fs from 'node:fs/promises'
import type { DataResult } from '../types'
import type { FastifyInstance, FastifyPluginOptions } from 'fastify'

const load = async (app: FastifyInstance, _: FastifyPluginOptions) => {
  const text = await fs.readFile(path.resolve('data/kodepos.json'), { encoding: 'utf-8' })
  const data: DataResult[] = JSON.parse(text)

  const fuse = new Fuse(data, {
    keys: ['province', 'regency', 'district', 'village', 'code'],
    includeScore: true,
    threshold: 0.1,
  })

  app.decorate('fuse', fuse)
  routes(app)
}

export default load
