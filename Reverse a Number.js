function reverseNumber(n) {
    return +((Math.sign(n) === -1 ? '-' : '') + [...Math.abs(n).toString()].reverse().join(''))
}