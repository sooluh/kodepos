"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("./controller"));
class Routes extends controller_1.default {
    constructor() {
        super();
    }
    routes(app) {
        app.get("/", this.home);
        app.get("/search/", this.search);
    }
    async override(request, reply) {
        let response = {
            code: 404,
            status: false,
            messages: "Looks like the endpoint you're looking for can't be found."
        };
        reply.status(response.code).send(response);
    }
    async error(error, request, reply) {
        console.error(error);
        let response = {
            code: error.statusCode,
            status: false,
            messages: "An error occurred either from the client or server.",
            data: { error }
        };
        reply.status(response.code).send(response);
    }
}
exports.default = Routes;
