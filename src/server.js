const app = require('express')()
const { urlencoded, json } = require('body-parser')

const port = process.env.PORT || 3000
const routes = require('./routes')

app.use(urlencoded({
    extended: true
}))
app.use(json())

routes(app)

app.listen(port, () => {
    console.log(`Listen to requests on http://localhost:${port}`)
})