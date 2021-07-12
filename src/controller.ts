import { DataResponse } from "../types/api";
import Kodepos from "./kodepos";

class Controller {
	protected async home(request: any, reply: any): Promise<void> {
		let response: DataResponse = {
			code: 200,
			status: true,
			messages: "This Restful API is used to search for Indonesian postal codes based on the name of a place, village or city.",
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
		};

		reply.status(response.code).send(response);
	}

	protected async search(request: any, reply: any): Promise<any> {
		let { q } = request.query;

		if (q === undefined || q.trim() === "") {
			let response: DataResponse = {
				code: 400,
				status: false,
				messages: "Cannot perform search without parameter \"q\"!"
			};

			reply.status(response.code).send(response);
		} else {
			let postal = new Kodepos(q);
			let result = await postal.search();

			reply.status(200).send(result);
		}
	}
}

export default Controller;
