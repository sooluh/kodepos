'use strict';

exports.approve = (values, res) => {
    var data = {
        'status': 200,
        'message': "Success",
        'data': values
    };
    res.json(data);
    res.end();
};

exports.disapprove = (values, res) => {
    var data = {
        'status': 404,
        'message': "Failure",
        'data': values
    };
    res.json(data);
    res.end();
};