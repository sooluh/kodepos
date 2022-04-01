import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { DataResponse } from './types'
import Controller from './controller'

class Routes extends Controller {
	constructor() {
		super()
	}

	protected routes(app: FastifyInstance): void {
		app.get('/', this.home)
		app.get('/search', this.search)
	}

	protected async override(_request: FastifyRequest, reply: FastifyReply): Promise<void> {
		let response: DataResponse = {
			code: 404,
			status: false,
			messages: 'Looks like the endpoint you\'re looking for can\'t be found.'
		}

		reply.status(response.code).send(response)
	}

	protected async error(error: any, _request: FastifyRequest, reply: FastifyReply): Promise<void> {
		console.error(error)

		let response: DataResponse = {
			code: error.statusCode,
			status: false,
			messages: 'An error occurred either from the client or server.',
			error
		}

		reply.status(response.code).send(response)
	}
}

export default Routes
