"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kodepos_1 = __importDefault(require("./kodepos"));
class Controller {
    async home(request, reply) {
        let response = {
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
    async search(request, reply) {
        let { q } = request.query;
        if (q === undefined || q.trim() === "") {
            let response = {
                code: 400,
                status: false,
                messages: "Cannot perform search without parameter \"q\"!"
            };
            reply.status(response.code).send(response);
        }
        else {
            let postal = new kodepos_1.default(q);
            let result = await postal.search();
            reply.status(200).send(result);
        }
    }
}
exports.default = Controller;
