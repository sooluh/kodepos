"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const header_generator_1 = __importDefault(require("header-generator"));
const cheerio_1 = __importDefault(require("cheerio"));
const axios_1 = __importDefault(require("axios"));
class Kodepos {
    constructor(keywords) {
        this.baseurl = "https://carikodepos.com/";
        this.keywords = keywords;
        this.headers = new header_generator_1.default({
            browsers: ["chrome", "firefox", "safari"],
            operatingSystems: ["linux", "android", "windows"],
            devices: ["desktop", "mobile"],
            locales: ["id-ID"]
        });
    }
    async search() {
        const url = this.baseurl + "?s=" + this.keywords;
        try {
            let output = await axios_1.default({
                method: "GET",
                url,
                headers: this.headers
            });
            const $ = cheerio_1.default.load(output.data);
            let tr = $("tr");
            if (tr.length > 0) {
                let results = [];
                tr.each((number, element) => {
                    if (number === 0)
                        return;
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
                let response = {
                    code: 200,
                    status: true,
                    messages: "Data search successfully parsed.",
                    data: results
                };
                return response;
            }
            else {
                let response = {
                    code: 200,
                    status: false,
                    messages: "No data can be returned."
                };
                return response;
            }
        }
        catch (error) {
            let response = {
                code: 500,
                status: false,
                messages: "An error occurred in the script."
            };
            return response;
        }
    }
}
exports.default = Kodepos;
