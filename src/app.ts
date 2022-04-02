import Fastify, { FastifyInstance } from 'fastify'
import fastifyCompress from 'fastify-compress'
// @ts-ignore
import fastifyPrettier from 'fastify-prettier'
import fastifyCors from 'fastify-cors'
import { parse } from 'qs'

import Routes from './routes'

class App extends Routes {
	private readonly port: number = 5000
	private readonly server: FastifyInstance

	constructor() {
		super()

		if (typeof process.env.PORT !== 'undefined') {
			this.port = parseInt(process.env.PORT)
		}

		this.server = Fastify({
			ignoreTrailingSlash: true,
			caseSensitive: false,
			querystringParser: q => parse(q),
			logger: process.env.NODE_ENV === 'development'
		})
	}

	private async middleware(): Promise<void> {
		await this.server.register(fastifyCors)
		await this.server.register(fastifyCompress)
		await this.server.register(fastifyPrettier, {
			alwaysOn: true
		})
	}

	public async start(): Promise<void> {
		try {
			await this.middleware()

			this.server.setNotFoundHandler(this.override)
			this.server.setErrorHandler(this.error)

			this.routes(this.server)

			let address = await this.server.listen(this.port, '0.0.0.0')
			console.info('Listen to requests on', address)
		} catch (error) {
			this.server.log.error(error)
			process.exit(1)
		}
	}
}

const app = new App()
app.start()
