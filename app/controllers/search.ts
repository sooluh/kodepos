import { KeywordOptions } from '../../types'
import { createSpecResponse, sendBadRequest } from '../helpers/spec'
import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export const search = (app: FastifyInstance) => {
  return async (request: FastifyRequest<{ Querystring: KeywordOptions }>, reply: FastifyReply) => {
    const { q } = request.query
    // TODO: search by province, regency, or district

    if (!q) {
      return sendBadRequest(reply)
    }

    const keywords = q
      // remove duplicate spaces
      .replace(/\s+/g, ' ')
      .split(' ')
      // add extended search per word
      // https://www.fusejs.io/examples.html#extended-search
      .map((i) => `'${i}`)
      .join(' ')

    const data = app.fuse.search(keywords)
    const result = data.map(({ item: { fulltext, ...rest } }) => rest)
    const response = createSpecResponse(result)

    reply.header('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800')
    return reply.send(response)
  }
}