

function highestRank(arr) {
    return [...arr.reduce((map, num) => {
        map.set(num, (map.get(num) || 0) + 1);
        return map
    }, new Map())
    ].sort((x, y) => y[1] - x[1] || y[0] - x[0])
        .shift()[0]
}