import { FastifyReply, FastifyRequest } from 'fastify'
import { DataResponse } from './types'
import Kodepos from './kodepos'

class Controller {
	public async home(_request: FastifyRequest, reply: FastifyReply): Promise<void> {
		reply.redirect('https://github.com/sooluh/kodepos')
	}

	public async search(request: FastifyRequest, reply: FastifyReply): Promise<any> {
		let { q } = request.query as any

		if (typeof q === 'undefined' || q.trim() === '') {
			let response: DataResponse = {
				code: 400,
				status: false,
				messages: 'Cannot perform search without parameter "q"!'
			}

			reply.status(response.code).send(response)
		} else {
			let postal = new Kodepos(q)
			let response = await postal.search()

			reply.status(response.code).send(response)
		}
	}
}

export default Controller
