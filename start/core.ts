import Fuse from 'fuse.js'
import * as path from 'path'
import { routes } from './routes'
import * as fs from 'node:fs/promises'
import type { DataResult } from '../types'
import type { FastifyInstance, FastifyPluginOptions } from 'fastify'

const createFullText = (data: DataResult) => {
  const keys = Object.keys(data)
  const combinations: string[] = []

  keys.forEach((key1, index1) => {
    keys.forEach((key2, index2) => {
      if (index1 !== index2) {
        combinations.push(`${data[key1]} ${data[key2]}`)
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
