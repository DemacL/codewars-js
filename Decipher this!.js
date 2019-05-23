function decipherThis(str) {
    return str
        .split(' ')
        .map(x => x.replace(/\d+/, x => String.fromCharCode(x)))
        .map(x => x.length > 2 ? x[0] + x[x.length - 1] + x.slice(2, x.length - 1) + x[1] : x)
        .join(' ')
}; 