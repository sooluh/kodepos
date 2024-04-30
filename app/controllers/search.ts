import { KeywordOptions } from '../../types'
import { createSpecResponse } from '../helpers/spec'
import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export const search = (app: FastifyInstance) => {
  return async (request: FastifyRequest<{ Querystring: KeywordOptions }>, reply: FastifyReply) => {
    const { q } = request.query
    // TODO: search by province, regency, or district
    const data = app.fuse.search(q).sort((a, b) => (a.score || 0) - (b.score || 0))

    reply.header('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800')

    const result = data.map(({ item }) => item)
    const response = createSpecResponse(result)

    return reply.send(response)
  }
}
