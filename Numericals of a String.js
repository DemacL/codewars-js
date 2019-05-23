function numericals(s) {
    const obj = {};
    return [...s].map(x => obj[x] = (obj[x] || 0) + 1).join('')
}