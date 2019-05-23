function rankings(arr) {
    return arr.map((x, index) => [x, index + 1])
        .sort((x, y) => y[0] - x[0])
        .map((x, index) => [...x, index + 1])
        .sort((x, y) => x[1] - y[1])
        .map(x => x[2])
}