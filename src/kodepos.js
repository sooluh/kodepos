const HeaderGenerator = require("header-generator");
const axios = require("axios").default;
const { load } = require("cheerio");

/**
 * Kodepos class
 */
class Kodepos {
	/**
	 * @var {String}
	 */
	#baseurl = "https://carikodepos.com/";

	/**
	 * @var {String}
	 */
	#keywords;

	/**
	 * @var {Object}
	 */
	#headers;

	/**
	 * Class constructor
	 * 
	 * @param {String} keywords
	 */
	constructor(keywords) {
		this.#keywords = keywords;
		this.#headers = new HeaderGenerator({
			browsers: ["chrome", "firefox", "safari"],
			operatingSystems: ["linux", "android", "windows"],
			devices: ["desktop", "mobile"],
			locales: ["id-ID"]
		});
	}

	/**
	 * Method to start postcode search
	 * 
	 * @returns {Array|Object|String}
	 */
	async search() {
		const url = this.#baseurl + "?s=" + this.#keywords;

		try {
			let output = await axios({
				method: "GET",
				url,
				headers: this.#headers
			});
			const $ = load(output.data);

			let tr = $("tr");
			if (tr.length > 0) {
				let results = [];

				tr.each((number, element) => {
					if (number === 0) return;

					let td = $(element).find("td");
					let result = {};

					td.each((index, html) => {
						let value = $(html).find("a").html();
						let key = index === 0 ? "province" :
							(index === 1 ? "city" :
								(index === 2 ? "subdistrict" :
									(index === 3 ? "urban" : "postalcode")));

						result[key] = value;
					});

					results.push(result);
				});

				return {
					success: true,
					message: "Data search successfully parsed.",
					data: results
				};
			} else {
				return {
					success: false,
					message: "No data can be returned.",
					data: []
				};
			}
		} catch (error) {
			return {
				success: false,
				message: "An error occurred in the script.",
				data: {
					error
				}
			};
		}
	}
}

module.exports = { Kodepos };
