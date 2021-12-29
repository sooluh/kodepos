const minify = require("minify-all-js")
const path = require("path")

const app = async () => {
    if (process.env.NODE_ENV !== "production") {
        return
    }

    const directory = path.resolve(__dirname, "..", "build")
    const output = await minify(directory, {
        compress_json: true,
        module: false,
        mangle: true,
        packagejson: false,
        all_js: true
    });

    console.log(output)
}

app()
