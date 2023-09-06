import { search as scrape } from '../utils/kodepos'
import { createSpecResponse, sendNotFound } from '../utils/spec'
import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export const search = (app: FastifyInstance) => {
  return async (request: FastifyRequest<{ Querystring: { q: string } }>, reply: FastifyReply) => {
    const { q } = request.query

    if (typeof q === 'undefined' || q.trim() === '') {
      return sendNotFound(reply)
    }

    const provider = app.providers.next()
    const result = await scrape({ query: q }, provider.value)
    const response = createSpecResponse(result)

    return reply.send(response)
  }
}
