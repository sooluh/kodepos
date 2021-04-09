const empty = (str) => (str === undefined || str === null || (str || "").trim() === "")

module.exports = {
    empty
}