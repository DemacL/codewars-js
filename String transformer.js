function stringTransformer(str) {
    return str.split(' ')
        .reverse()
        .map(str => [...str]
            .map(c => /[a-z]/.test(c) ? c.toUpperCase() : c.toLowerCase())
            .join(''))
        .join(' ')
}