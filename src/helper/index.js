const empty = (str) => {

    if (str === undefined) {
        return true
    }

    if (str === null) {
        return true
    }

    if (str === '') {
        return true
    }

    return false

}

module.exports = {
    empty
}