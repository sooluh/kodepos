import type { FastifyReply, FastifyRequest } from 'fastify'

export const home = async (
  request: FastifyRequest<{ Querystring: { q: string } }>,
  reply: FastifyReply
) => {
  const { q } = request.query

  if (typeof q !== 'undefined' && q.trim() !== '') {
    const baseurl = `${request.protocol}://${request.hostname}`
    return reply.redirect(301, `${baseurl}/search/?q=${q}`)
  }

  return reply.redirect(302, 'https://github.com/sooluh/kodepos')
}
