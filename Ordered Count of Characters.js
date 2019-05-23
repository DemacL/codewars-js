var orderedCount = function (text) {
    return [...text].reduce((arr, c) => {
        const finded = arr.filter(x => x[0] === c)[0]
        if (finded) {
            finded[1] = ++finded[1]
        } else {
            arr.push([c, 1])
        }
        return arr
    }, [])
}