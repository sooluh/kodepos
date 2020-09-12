'use strict';

exports.approve = (values, res) => {
    var data = {
        'success': true,
        'message': "success",
        'data': values
    };
    res.json(data);
    res.end();
};

exports.disapprove = (values, res) => {
    var data = {
        'success': false,
        'message': "failure",
        'data': values
    };
    res.json(data);
    res.end();
};