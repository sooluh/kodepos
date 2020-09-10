'use strict';

module.exports = (app) => {
    var controller = require('./controller');

    app.route('/')
        .get(controller.index);
};