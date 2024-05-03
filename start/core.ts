import Fuse from 'fuse.js'
import * as path from 'path'
import { routes } from './routes'
import * as fs from 'node:fs/promises'
import type { DataResult } from '../types'
import type { FastifyInstance, FastifyPluginOptions } from 'fastify'

const createFullText = (data: DataResult) => {
  const keys = ['code', 'village', 'district', 'regency', 'province']
  const combinations: string[] = []

  keys.forEach((a, x) => {
    keys.forEach((b, y) => {
      if (x !== y) {
        combinations.push(`${data[a]} ${data[b]}`)
      }
    })
  })

  return combinations.join(' ')
}

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
  routes(app)
}

export default load
