const { Controller } = require(__dirname + "/controller.js");

/**
 * Routes class
 */
class Routes extends Controller {
	/**
	 * Class constructor
	 */
	constructor() {
		super();
	}

	/**
	 * Method to handle all custom routes
	 * 
	 * @param {*} app
	 * 
	 * @returns {VoidFunction}
	 */
	routes(app) {
		// welcome endpoint
		app.get("/", this.home);

		// search endpoint
		app.get("/search/", this.search);
	}

	/**
	 * Method to handle page not found
	 * 
	 * @param {*} request
	 * @param {*} response
	 * 
	 * @returns {VoidFunction}
	 */
	async override(request, response) {
		response.status(404)
			.send({
				success: false,
				message: "Looks like the endpoint you're looking for can't be found.",
				data: []
			});
	}

	/**
	 * Methods for handling errors
	 * 
	 * @param {*} error
	 * @param {*} request
	 * @param {*} response
	 * 
	 * @returns {VoidFunction}
	 */
	async error(error, request, response) {
		super.app.log.error(error);

		response.status(error.statusCode)
			.send({
				success: false,
				message: "An error occurred either from the client or server.",
				data: {
					error
				}
			});
	}
}

module.exports = { Routes };
