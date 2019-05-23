
function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
        return ''
    }

    return strarr.map((_, index) => [index, strarr.slice(index, index + k).join('')])
        .sort((x, y) => x[1].length === y[1].length ? y[0] - x[0] : x[1].length - y[1].length)
        .pop()[1];

}