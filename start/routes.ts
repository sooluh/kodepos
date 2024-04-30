import { home } from '../app/controllers/home'
import type { FastifyInstance } from 'fastify'
import { search } from '../app/controllers/search'

export const routes = (app: FastifyInstance) => {
  app.get('/', home)
  app.get('/search', search(app))
}
