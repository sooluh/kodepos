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

export const sendBadRequest = (reply: FastifyReply) => {
  return reply.status(400).send({
    statusCode: 400,
    code: 'BAD_REQUEST',
    message: "The 'q' parameter must be filled.",
  })
}
