import { DataResponse } from "./interfaces/api";
import Controller from "./controller";

class Routes extends Controller {
	constructor() {
		super();
	}

	protected routes(app: any): void {
		// welcome endpoint
		app.get("/", this.home);

		// search endpoint
		app.get("/search/", this.search);
	}

	protected async override(request: any, reply: any): Promise<void> {
		let response: DataResponse = {
			code: 404,
			status: false,
			messages: "Looks like the endpoint you're looking for can't be found."
		};

		reply.status(response.code).send(response);
	}

	protected async error(error: any, request: any, reply: any): Promise<void> {
		console.error(error);

		let response: DataResponse = {
			code: error.statusCode,
			status: false,
			messages: "An error occurred either from the client or server.",
			data: { error }
		};

		reply.status(response.code).send(response);
	}
}

export default Routes;
