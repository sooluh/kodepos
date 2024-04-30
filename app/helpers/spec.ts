import type { FastifyReply } from 'fastify'

export const createSpecResponse = (
  data: any,
  statusCode?: number,
  code?: string,
  message?: string
) => {
  return {
    statusCode: statusCode || 200,
    code: code || 'OK',
    message: message || undefined,
    data,
  }
}

export const sendNotFound = (reply: FastifyReply) => {
  return reply.status(404).send({
    statusCode: 404,
    code: 'NOT_FOUND',
    message: 'This endpoint cannot be found.',
  })
}
