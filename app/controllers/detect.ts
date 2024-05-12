import { DetectQueries } from '../../types'
import { nearestDetection } from '../helpers/kodepos'
import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { createSpecResponse, sendBadRequest, sendNotFound } from '../helpers/spec'

export const detect = (app: FastifyInstance) => {
  return async (request: FastifyRequest<{ Querystring: DetectQueries }>, reply: FastifyReply) => {
    const { latitude, longitude } = request.query

    if (
      typeof latitude === 'undefined' ||
      latitude.toString().trim() === '' ||
      typeof longitude === 'undefined' ||
      longitude.toString().trim() === ''
    ) {
      return sendBadRequest(reply, "The 'latitude' and 'longitude' parameters is required.")
    }

    const result = nearestDetection(app.data, latitude, longitude)

    if (!result) {
      return sendNotFound(reply)
    }

    const response = createSpecResponse(result)

    reply.header('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800')
    return reply.send(response)
  }
}
