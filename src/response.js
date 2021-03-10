const approve = (values, response) => {

    let data = {
        success: true,
        message: 'success',
        data: values
    }

    response.set('X-Powered-By', 'sooluh')
    response.json(data)
    response.end()

}

const disapprove = (values, response) => {

    let data = {
        success: false,
        message: 'failure',
        data: values
    }

    response.set('X-Powered-By', 'sooluh')
    response.json(data)
    response.end()

}

module.exports = {
    approve,
    disapprove
}