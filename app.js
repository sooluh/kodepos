import Routes from "./src/routes.js";

import compress from "fastify-compress";
import Fastify from "fastify";
import middie from "middie";
import cors from "cors";
import { parse } from "qs";

/**
 * App class
 */
class App extends Routes {
	/**
	 * @var {Number}
	 */
	#port;

	/**
	 * @var {Fastify}
	 */
	app;

	/**
	 * Class constructor
	 */
	constructor() {
		super();

		this.#port = process.env.PORT || 3000;
		this.app = new Fastify({
			ignoreTrailingSlash: true,
			caseSensitive: false,
			querystringParser: q => parse(q)
		});
	}

	/**
	 * Method for declaring all middleware
	 * 
	 * @returns {VoidFunction}
	 */
	async #middleware() {
		// express compatibility layer
		this.app.use(cors());

		// fastify register
		await this.app.register(compress);
	}

	/**
	 * Method to start server
	 * 
	 * @returns {VoidFunction}
	 */
	async start() {
		try {
			await this.app.register(middie);
			this.#middleware();

			this.app.setNotFoundHandler(this.override);
			this.app.setErrorHandler(this.error);

			this.routes(this.app);

			let address = await this.app.listen(this.#port);
			console.info("Listen to requests on " + address);
		} catch (error) {
			this.app.log.error(error);
			process.exit(1);
		}
	}
}

/**
 * Call App class and start function
 */
new App().start();
