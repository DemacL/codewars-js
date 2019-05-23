function sumArray(array) {
    return (array || []).sort((x, y) => x - y).slice(1, -1).reduce((sum, item) => sum + item, 0)
}