import { home } from './controllers/home'
import { search } from './controllers/search'
import type { FastifyInstance } from 'fastify'

export const routes = (app: FastifyInstance) => {
  app.get('/', home)
  app.get('/search', search(app))
}
