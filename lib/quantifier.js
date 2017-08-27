module.exports = function(str) {
    // return /\d+\.jpe?g$/.test(str)
    return /[0-9]+\.(jpeg|jpg)$/.test(str)
}