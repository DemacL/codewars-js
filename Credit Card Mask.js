// return masked string
function maskify(cc) {
    return '#'.repeat(cc.length > 4 ? cc.length - 4 : 0) + cc.slice(-4)
}
