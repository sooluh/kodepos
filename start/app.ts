import fastify from 'fastify'
import { sendNotFound } from '../app/helpers/spec'

const app = async () => {
  try {
    console.info('Running app...')
    const app = fastify({ ignoreTrailingSlash: true, caseSensitive: false })

    await app.register(import('@fastify/cors'))
    await app.register(import('@fastify/compress'))
    await app.register(import('@fastify/etag'))
    await app.register(import('./core'))

    if (process.env.ENABLE_RATE_LIMIT) {
      await app.register(import('@fastify/rate-limit'), { max: 2, timeWindow: '1 second' })
    }

    app.setNotFoundHandler((_request, reply) => {
      return sendNotFound(reply)
    })

    app.setErrorHandler((error, _request, reply) => {
      if (error.statusCode === 429) {
        return reply.status(429).send({
          statusCode: 429,
          code: 'TOO_MANY_REQUESTS',
          message: 'Request limit: 2x per second.',
        })
      }

      return reply.status(500).send({
        statusCode: 500,
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Please contact the developer.',
      })
    })

    if (process.env.NODE_ENV === 'production') {
      for (const signal of ['SIGINT', 'SIGTERM']) {
        process.on(signal, () => {
          app.close().then((err) => {
            console.log(`close application on ${signal}`)
            process.exit(err ? 1 : 0)
          })
        })
      }
    }

    const address = await app.listen({ host: '0.0.0.0', port: Number(process.env.PORT || 3000) })
    console.info('Listen to requests on', address)
  } catch (e) {
    console.error(e)
  }
}

process.on('unhandledRejection', (e) => {
  console.error(e)
  process.exit(1)
})

app()
