function topThreeWords(text) {
    return [...(text.toLowerCase()
        .match(/[a-zA-Z']+/g) || [])
        .reduce((map, word) => {
            if ('\''.repeat(word.length) !== word) {
                map.set(word, (map.get(word) || 0) + 1);
            }
            return map
        }, new Map())]
        .sort((x, y) => y[1] - x[1])
        .slice(0, 3)
        .map(item => item[0])
}