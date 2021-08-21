"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./routes"));
const fastify_compress_1 = __importDefault(require("fastify-compress"));
const fastify_1 = __importDefault(require("fastify"));
const middie_1 = __importDefault(require("middie"));
const qs_1 = require("qs");
const cors_1 = __importDefault(require("cors"));
class App extends routes_1.default {
    constructor() {
        super();
        this.port = 3000;
        this.port = process.env.PORT || this.port;
        this.server = fastify_1.default({
            ignoreTrailingSlash: true,
            caseSensitive: false,
            querystringParser: q => qs_1.parse(q)
        });
    }
    async middleware() {
        this.server.use(cors_1.default());
        await this.server.register(fastify_compress_1.default);
    }
    async start() {
        try {
            await this.server.register(middie_1.default);
            await this.middleware();
            this.server.setNotFoundHandler(this.override);
            this.server.setErrorHandler(this.error);
            this.routes(this.server);
            let address = await this.server.listen(this.port);
            console.info("Listen to requests on " + address);
        }
        catch (error) {
            this.server.log.error(error);
            process.exit(1);
        }
    }
}
new App().start();
