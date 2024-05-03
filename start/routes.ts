import { home } from '../app/controllers/home'
import type { FastifyInstance } from 'fastify'
import { detect } from '../app/controllers/detect'
import { search } from '../app/controllers/search'

export const routes = (app: FastifyInstance) => {
  app.get('/', home)
  app.get('/search', search(app))
  app.get('/detect', detect(app))
}
