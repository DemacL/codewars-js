function getLengthOfMissingArray(arrayOfArrays) {
    if (!arrayOfArrays || arrayOfArrays.length === 0 || arrayOfArrays.some(x => !x || x.length === 0)) return 0
    const sortArr = arrayOfArrays.map(x => x.length).sort((x, y) => x - y);;
    return (sortArr[0] + sortArr[sortArr.length - 1]) * (sortArr.length + 1) / 2 - sortArr.reduce((sum, x) => sum + x, 0)
}
