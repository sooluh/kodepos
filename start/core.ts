import Fuse from 'fuse.js'
import * as path from 'path'
import { routes } from './routes'
import * as fs from 'node:fs/promises'
import type { DataResult } from '../types'
import { createFullText } from '../app/helpers/kodepos'
import type { FastifyInstance, FastifyPluginOptions } from 'fastify'

const load = async (app: FastifyInstance, _: FastifyPluginOptions) => {
  const text = await fs.readFile(path.resolve('data/kodepos.json'), { encoding: 'utf-8' })
  const json: DataResult[] = JSON.parse(text)
  const data = json.map((item) => ({ ...item, fulltext: createFullText(item) }))

  const fuse = new Fuse(data, {
    keys: ['fulltext'],
    includeScore: true,
    threshold: 0.1,
    shouldSort: true,
    ignoreLocation: true,
    useExtendedSearch: true,
  })

  app.decorate('fuse', fuse)
  app.decorate('data', json)

  routes(app)
}

export default load
