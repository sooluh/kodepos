import Kodepos from "./kodepos.js";

/**
 * Controller class
 */
class Controller {
	/**
	 * Method for main route (home)
	 * 
	 * @param {*} request
	 * @param {*} response
	 * 
	 * @returns {Object}
	 */
	async home(request, response) {
		response.status(200)
			.send({
				success: true,
				message: "This Restful API is used to search for Indonesian postal codes based on the name of a place, village or city.",
				data: {
					documentation: "https://github.com/sooluh/kodepos#readme",
					author: {
						name: "Suluh Sulistiawan",
						email: "suluh.webdevelopers@hotmail.com",
						url: "https://suluh.my.id/",
						social: {
							twitter: "https://www.twitter.com/suluh_s",
							linkedin: "https://www.linkedin.com/in/suluhs",
							github: "https://github.com/sooluh"
						}
					}
				}
			});
	}

	/**
	 * Method for search route
	 * 
	 * @param {*} request
	 * @param {*} response
	 * 
	 * @returns {Object}
	 */
	async search(request, response) {
		let { q } = request.query;

		if (
			q === undefined ||
			q.trim() === ""
		) {
			response.status(400)
				.send({
					status: false,
					message: "Cannot perform search without parameter \"q\"!",
					data: []
				});
		} else {
			let postalcode = new Kodepos(q);
			let result = await postalcode.search();

			response.status(200)
				.send(result);
		}
	}
}

export default Controller;
