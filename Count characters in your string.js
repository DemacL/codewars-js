function count(string) {
    return [...string].reduce((obj, ch) => {
        obj[ch] = (obj[ch] || 0) + 1;
        return obj
    }, {})
}