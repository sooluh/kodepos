const { home, search, pnf } = require('./../controller')

module.exports = (app) => {

    // home route
    app.route('/')
        .get(home)

    // search route
    app.route('/search')
        .get(search)

    // page not found
    app.route('*')
        .all(pnf)

}