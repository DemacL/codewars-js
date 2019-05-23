function anagramDifference(w1, w2) {
    const charCountObj = [...w1].reduce((obj, c) => {
        obj[c] = (obj[c] || 0) + 1
        return obj;
    }, {})
    const sameSum = Object.keys(charCountObj).reduce((sum, key) => {
        sum += Math.abs(charCountObj[key] - [...w2].filter(c => c === key).length)
        return sum
    }, 0)
    return sameSum + [...w2].filter(x => !Object.keys(charCountObj).includes(x)).length
}
