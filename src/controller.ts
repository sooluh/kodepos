import { FastifyReply, FastifyRequest } from 'fastify'
import { DataResponse } from './types'
import Kodepos from './kodepos'

class Controller {
	public async home(request: FastifyRequest, reply: FastifyReply): Promise<void> {
		// @ts-ignore
		let { q } = request.query

		if (typeof q !== 'undefined' && q.trim() !== '') {
			let redirect = `${request.protocol}://${request.hostname}/search/?q=${q}`
			return reply.redirect(301, redirect)
		}

		return reply.redirect(302, 'https://github.com/sooluh/kodepos')
	}

	public async search(request: FastifyRequest, reply: FastifyReply): Promise<void> {
		// @ts-ignore
		let { q } = request.query

		if (typeof q !== 'undefined' && q.trim() !== '') {
			let postal = new Kodepos(q)
			let response = await postal.search()

			return reply.status(response.code).send(response)
		}

		let response: DataResponse = {
			code: 400,
			status: false,
			messages: 'Cannot perform search without parameter "q"!'
		}

		return reply.status(response.code).send(response)
	}
}

export default Controller
