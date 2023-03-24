import { FastifyReply, FastifyRequest } from 'fastify'
import { DataResponse } from './types'
import Kodepos from './kodepos'

class Controller {
	public async home(request: FastifyRequest, reply: FastifyReply): Promise<void> {
		const { homepage } = require(__dirname + '/../package.json')
		const baseurl = `${request.protocol}://${request.hostname}`

		// @ts-ignore
		let { q, json } = request.query

		if (typeof json !== 'undefined' && json.trim() != false) {
			const { author } = require(__dirname + '/../package.json')

			let response: DataResponse = {
				code: 200,
				status: true,
				messages: 'Welcome to kodepos! Read the API documentation on the listed github repository',
				data: {
					repository: `${homepage}#basic-usage`,
					example: `${baseurl}/search/?q=danasari`,
					author
				}
			}

			return reply.status(response.code).send(response)
		}

		if (typeof q !== 'undefined' && q.trim() !== '') {
			let redirect = `${baseurl}/search/?q=${q}`
			return reply.redirect(301, redirect)
		}

		return reply.redirect(302, homepage)
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
