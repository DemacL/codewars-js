function birdCode(arr) {

    return arr.map(x => x.split(/[-_\s]/)).map(x =>
        (x.length === 1 ? x.slice(0, 4)
            : x.length === 2 ? x[0].slice(0, 2) + x[1].slice(0, 2)
                : x.length === 3 ? x[0][0] + x[1][1] + x[2].slice(0, 2)
                    : x.reduce((str, y) => str + y[0], '')).toUpperCase())
}