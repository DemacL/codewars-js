function duplicateCount(text) {
    return [...[...text.toLowerCase()]
        .reduce((m, c) => {
            m.set(c, m.get(c) ? m.get(c) + 1 : 1);
            return m
        }, new Map())]
        .filter(x => x[1] >= 2).length
}