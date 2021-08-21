import Routes from "./routes";

import compress from "fastify-compress";
import Fastify from "fastify";
import middie from "middie";
import { parse } from "qs";
import cors from "cors";

class App extends Routes {
	private port: number | string = 3000;
	private server: any;

	constructor() {
		super();

		this.port = process.env.PORT || this.port;
		this.server = Fastify({
			ignoreTrailingSlash: true,
			caseSensitive: false,
			querystringParser: q => parse(q)
		});
	}

	private async middleware(): Promise<void> {
		// express compatibility layer
		this.server.use(cors());

		// fastify register
		await this.server.register(compress);
	}

	public async start(): Promise<void> {
		try {
			await this.server.register(middie);
			await this.middleware();

			this.server.setNotFoundHandler(this.override);
			this.server.setErrorHandler(this.error);

			this.routes(this.server);

			let address = await this.server.listen(this.port);
			console.info("Listen to requests on " + address);
		} catch (error) {
			this.server.log.error(error);
			process.exit(1);
		}
	}
}

new App().start();
