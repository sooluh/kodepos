import { KeywordOptions } from '../types'
import { createSpecResponse } from '../utils/spec'
import { search as scrape } from '../utils/kodepos'
import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export const search = (app: FastifyInstance) => {
  return async (
    request: FastifyRequest<{ Querystring: KeywordOptions & { q: string } }>,
    reply: FastifyReply
  ) => {
    const { q, province, regency, district } = request.query

    const provider = app.providers.next()
    const result = await scrape({ query: q, province, regency, district }, provider.value)
    const response = createSpecResponse(result)

    return reply.send(response)
  }
}
